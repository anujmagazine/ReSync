import { GoogleGenAI } from "@google/genai";
import { GenerateRequest, ParsedReport, GroundingSource } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const PROMPT_TEMPLATE = `
**Role:** You are "ReSync," an expert knowledge-bridging analyst. Your job is to bridge the knowledge gap for a user who has stepped away from a specific topic, tool, or industry for a period of time.

**Objective:** Provide a highly scannable, engaging, and factual update on the target subject strictly between the <PAST_DATE> and <CURRENT_DATE>.

**Tone:** Sharp, energetic, conversational, and direct. Avoid academic jargon unless defining it.

**Operational Rules:**
1.  **Search First:** You must utilize Google Search to find real, dated events and releases.
2.  **No Fluff:** Do not use filler introductions. Start immediately with the content.
3.  **Strict Formatting:** You must use the structure defined below accurately.
4.  **Date Strictness:** **DO NOT** include any events, releases, or news that occurred **before** {{SINCE_DATE}}. Start your timeline and analysis strictly AFTER this date.

**Output Structure:**

## 🚀 The 30-Second Catch-Up
[Provide a 2-sentence summary of the biggest shift in "vibe" or direction for this topic.]

## 🏆 The "Big Three" (Major Milestones)
[Identify the top 3 most critical updates that happened AFTER {{SINCE_DATE}}. Use exactly this format:]
* **Headline 1:** Description.
* **Headline 2:** Description.
* **Headline 3:** Description.

## 🔄 Then vs. Now (The Paradigm Shift)
[Compare how things were done roughly around {{SINCE_DATE}} versus how they are done today. Focus on workflows, tools, or philosophies.]
| The Old Way | The New Way | Why It Changed |
| :--- | :--- | :--- |
| [Old concept] | [New concept] | [Brief benefit] |
... (add 3 rows)

## 📅 Timeline of Evolution
[Create a Markdown Table to show the progression. **CRITICAL: Only list events that happened AFTER {{SINCE_DATE}}. Do not include earlier context.** Write the 'What Happened' column in simple, plain English suitable for a non-expert.]
| Date (Approx) | What Happened | Why It Matters |
| :--- | :--- | :--- |
| [Date] | [Simple Description] | [One-sentence impact] |
... (add 3-5 rows)

## 🧠 New Terminology (Jargon Buster)
[List 3-5 *new* buzzwords that have emerged since the date. **If there are no major new terms, output "None".**]
* **[Term]:** [Simple definition]

## ⚡ The New Standard (Current State)
[One paragraph describing the "default" way of doing things today. What is the modern stack, standard approach, or current consensus?]

---
**Input Variables:**
* **Current Date:** {{CURRENT_DATE}}
* **Topic:** {{TOPIC}}
* **Since (Start Date):** {{SINCE_DATE}}
`;

export const generateReport = async (request: GenerateRequest): Promise<ParsedReport> => {
  // Use ISO format YYYY-MM-DD to match the input date format and avoid locale ambiguity
  const currentDate = new Date().toISOString().split('T')[0];
  
  const prompt = PROMPT_TEMPLATE
    .replace('{{CURRENT_DATE}}', currentDate)
    .replace('{{TOPIC}}', request.topic)
    .replace(/{{SINCE_DATE}}/g, request.sinceDate); // Global replace for multiple occurrences

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        thinkingConfig: { thinkingBudget: 0 } // Disable thinking for faster response on simple structure
      }
    });

    const text = response.text || "No content generated.";
    
    // Extract sources if available
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const sources: GroundingSource[] = groundingChunks
      .filter((chunk: any) => chunk.web?.uri)
      .map((chunk: any) => ({
        title: chunk.web.title,
        uri: chunk.web.uri
      }));

    return parseReportContent(text, sources);
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};

const parseReportContent = (text: string, sources: GroundingSource[]): ParsedReport => {
  const report: ParsedReport = {
    catchUp: "",
    bigThree: [],
    timeline: [],
    terminology: [],
    currentStand: "",
    thenVsNow: [],
    raw: text,
    sources
  };

  const sections = text.split(/^## /m);

  sections.forEach(section => {
    const lines = section.trim().split('\n');
    const header = lines[0].trim();
    const content = lines.slice(1).join('\n').trim();

    if (header.includes("The 30-Second Catch-Up")) {
      report.catchUp = content;
    } 
    else if (header.includes("The \"Big Three\"")) {
      const items = content.match(/^\* \*\*(.*?):\*\* (.*)$/gm);
      if (items) {
        report.bigThree = items.map(item => {
          const match = item.match(/^\* \*\*(.*?):\*\* (.*)$/);
          return match ? { title: match[1], description: match[2] } : { title: "", description: "" };
        });
      }
    }
    else if (header.includes("Then vs. Now")) {
       const rows = content.split('\n').filter(line => line.includes('|') && !line.includes('---'));
       const dataRows = rows.slice(1);
       report.thenVsNow = dataRows.map(row => {
        const cols = row.split('|').map(c => c.trim()).filter(c => c !== '');
        return {
          old: cols[0] || '',
          new: cols[1] || '',
          benefit: cols[2] || ''
        };
       }).filter(r => r.old && r.new);
    }
    else if (header.includes("Timeline of Evolution")) {
      const rows = content.split('\n').filter(line => line.includes('|') && !line.includes('---'));
      const dataRows = rows.slice(1); 
      report.timeline = dataRows.map(row => {
        const cols = row.split('|').map(c => c.trim()).filter(c => c !== '');
        return {
          date: cols[0] || '',
          event: cols[1] || '',
          impact: cols[2] || ''
        };
      }).filter(r => r.date && r.event);
    }
    else if (header.includes("New Terminology")) {
      if (!content.includes("None")) {
        const items = content.match(/^\* \*\*(.*?):\*\* (.*)$/gm);
        if (items) {
          report.terminology = items.map(item => {
            const match = item.match(/^\* \*\*(.*?):\*\* (.*)$/);
            return match ? { term: match[1], definition: match[2] } : { term: "", definition: "" };
          });
        }
      }
    }
    else if (header.includes("The New Standard")) {
      report.currentStand = content;
    }
  });

  return report;
};