import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey:'INSERT YOUR API KEY HERE'});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Can you tell what my name is?",
  });
  console.log(response.text);
}

await main();
