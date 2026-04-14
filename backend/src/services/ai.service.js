const { GoogleGenerativeAI } = require("@google/generative-ai");

class AIService {
  constructor() {
    if (!process.env.GEMINI_API_KEY) {
      console.warn("WARNING: Missing GEMINI_API_KEY in environment variables");
    } else {
      this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
      this.model = this.genAI.getGenerativeModel({
        model: "gemini-2.5-flash"
      });
    }
  }

  async analyzeToken(payload) {
    if (!this.model) {
       throw new Error("Missing GEMINI_API_KEY in environment variables");
    }

    try {
      const prompt = `
You are a financial risk analyst for institutional crypto investments.

Analyze this RWA token using the structured data below:

${JSON.stringify(payload, null, 2)}

Return ONLY valid JSON.
Do not include markdown, backticks, or explanations.

Format:
{
  "risk_score": number (0-100),
  "risk_level": "Low | Medium | High",
  "compliance_flags": [],
  "summary": "",
  "institutional_recommendation": ""
}
      `;

      const result = await this.model.generateContent(prompt);
      const text = result.response.text();

      // Clean possible markdown formatting
      const cleaned = text.replace(/```json|```/g, "").trim();

      let parsed;

      try {
        parsed = JSON.parse(cleaned);
      } catch (err) {
        throw new Error("Failed to parse Gemini response as JSON");
      }

      return {
        riskScore: parsed.risk_score,
        riskLevel: parsed.risk_level,
        complianceFlags: parsed.compliance_flags || [],
        summary: parsed.summary,
        recommendation: parsed.institutional_recommendation
      };

    } catch (error) {
      console.error("Gemini AI Error:", error.message);
      // Standardize generic error fallback to not leak complex inner failures
      throw new Error("AI analysis failed. Please try again.");
    }
  }
}

module.exports = new AIService();
