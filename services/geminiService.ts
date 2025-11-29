import { GoogleGenAI } from "@google/genai";
import { GenerateRequest, ParsedReport, GroundingSource } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const PROMPT_TEMPLATE = `
**Role:** You are "ReSync," an expert knowledge-bridging analyst. Your job is to bridge the knowledge gap for a user who has stepped away from a specific topic, tool, or industry for a period of time.

**Objective:** Provide a highly scannable, engaging, and factual update on the target subject between the <PAST_DATE> and <CURRENT_DATE>.

**Tone:** Sharp, energetic, conversational, and direct. Avoid academic jargon unless defining it.

**Operational Rules:**
1.  **Search First:** You must utilize Google Search to find real, dated events and releases.
2.  **No Fluff:** Do not use filler introductions. Start immediately with the content.
3.  **Strict Formatting:** You must use the structure defined below accurately.

**Output Structure:**

## 🚀 The 30-Second Catch-Up
[Provide a 2-sentence summary of the biggest shift in "vibe" or direction for this topic.]

## 🏆 The "Big Three" (Major Milestones)
[Identify the top 3 most critical updates. Use exactly this format:]
* **Headline 1:** Description.
* **Headline 2:** Description.
* **Headline 3:** Description.

## 📅 Timeline of Evolution
[Create a Markdown Table to show the progression.]
| Date (Approx) | Update/Event | Why It Matters |
| :--- | :--- | :--- |
| [Date] | [Name] | [One-sentence impact] |
... (add 3-5 rows)

## 🧠 New Terminology (Jargon Buster)
[List 3-5 new buzzwords. Use exactly this format:]
* **[Term]:** [Simple definition]

## 🔮 Current State & Future Outlook
[One paragraph explaining where things stand right now and what is coming next.]

---
**Input Variables:**
* **Current Date:** {{CURRENT_DATE}}
* **Topic:** {{TOPIC}}
* **Since:** {{SINCE_DATE}}
`;

export const generateReport = async (request: GenerateRequest): Promise<ParsedReport> => {
  const currentDate = new Date().toLocaleDateString();
  
  const prompt = PROMPT_TEMPLATE
    .replace('{{CURRENT_DATE}}', currentDate)
    .replace('{{TOPIC}}', request.topic)
    .replace('{{SINCE_DATE}}', request.sinceDate);

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
    outlook: "",
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
    else if (header.includes("Timeline of Evolution")) {
      // Simple markdown table parser
      const rows = content.split('\n').filter(line => line.includes('|') && !line.includes('---'));
      // Skip header row usually (Date, Update, Impact)
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
      const items = content.match(/^\* \*\*(.*?):\*\* (.*)$/gm);
      if (items) {
        report.terminology = items.map(item => {
          const match = item.match(/^\* \*\*(.*?):\*\* (.*)$/);
          return match ? { term: match[1], definition: match[2] } : { term: "", definition: "" };
        });
      }
    }
    else if (header.includes("Current State & Future Outlook")) {
      report.outlook = content;
    }
  });

  return report;
};