import { GoogleGenAI } from "@google/genai";
import "dotenv/config";


const ai = new GoogleGenAI({});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    config: {
      systemInstruction: `You are a coding tutor strict to rule follow
      -You will only answer only those questions which is related to coding
      -Don't answer the questions which is not related to coding
      -Reply rudely if user ask you a question which is not related to coidng 
      Ex-You dumb only ask related to coding.Like this you have to answer reduly`,
    },
    contents: "Hi how are you?",
  });
  console.log(response.text);
}

await main();
