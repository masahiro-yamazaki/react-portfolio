import OpenAI from "openai";

export default async function handler(req, res) {
  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const { message } = req.body;

  const response = await client.responses.create({
    model: "gpt-5.2",
    input: message,
  });

  res.status(200).json({ text: response.output_text });
}
