import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey:'AIzaSyCLvIjJBrGkX1EnQIZN__5PPc3SxdFr4U8'});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Can you tell what my name is?",
  });
  console.log(response.text);
}

await main();