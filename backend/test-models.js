require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

async function listModels() {
  if (!process.env.GEMINI_API_KEY) {
    console.error('GEMINI_API_KEY not found in .env');
    return;
  }
  
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  
  try {
    // There is no direct listModels in the base class interface of @google/generative-ai typically
    // without hitting the REST endpoint. I will use native fetch to get it since the SDK is mainly for generating content.
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GEMINI_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.models) {
      console.log('Available Models:');
      data.models.forEach(m => {
         if (m.supportedGenerationMethods.includes('generateContent')) {
           console.log(`- ${m.name}`);
         }
      });
    } else {
      console.log('No models fetched:', data);
    }
  } catch (error) {
    console.error('Error listing models:', error);
  }
}

listModels();
