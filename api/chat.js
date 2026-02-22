import OpenAI from "openai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { message } = req.body ?? {};
    if (!message) return res.status(400).json({ error: "message is required" });

    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const response = await client.responses.create({
      model: "gpt-5.2",
      input: message,
    });

    return res.status(200).json({ text: response.output_text });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "OpenAI request failed" });
  }
}
