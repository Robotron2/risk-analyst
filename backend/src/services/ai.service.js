const { GoogleGenerativeAI } = require("@google/generative-ai");

function withTimeout(promise, ms = 5000) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timeout")), ms)
    )
  ]);
}

class AIService {
  constructor() {
    if (!process.env.GEMINI_API_KEY) {
      console.warn("WARNING: Missing GEMINI_API_KEY in environment variables");
    } else {
      this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
      
      this.flashModel = this.genAI.getGenerativeModel({
        model: "gemini-2.5-flash"
      });

      this.proModel = this.genAI.getGenerativeModel({
        model: "gemini-2.5-pro"
      });
    }
  }

  async generate(model, prompt) {
    if (!model) throw new Error("Missing GEMINI_API_KEY, cannot initialize model");
    
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    const cleaned = text.replace(/```json|```/g, "").trim();
    
    try {
       return JSON.parse(cleaned);
    } catch (err) {
       throw new Error("Failed to parse Gemini response as JSON");
    }
  }

  async analyzeToken(payload) {
    const prompt = `
You are a financial risk analyst.

Analyze the token below:

${JSON.stringify(payload, null, 2)}

Return ONLY valid JSON:
{
  "risk_score": number,
  "risk_level": "Low | Medium | High",
  "compliance_flags": [],
  "summary": "",
  "institutional_recommendation": ""
}
`;

    try {
      return await withTimeout(
        this.generate(this.flashModel, prompt),
        5000
      );

    } catch (err1) {
      console.warn("Flash failed, falling back to Pro...");

      try {
        return await withTimeout(
          this.generate(this.proModel, prompt),
          7000
        );

      } catch (err2) {
        console.error("All Gemini models failed:", err2.message);
        throw new Error("All Gemini models failed or timed out.");
      }
    }
  }
}

module.exports = new AIService();
