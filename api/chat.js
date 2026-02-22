export default async function handler(req, res) {
  try {
    // ブラウザ直叩き（GET）でもクラッシュしない
    if (req.method !== "POST") {
      return res.status(200).json({ ok: true, hint: "POST /api/chat with {message}" });
    }

    // Vercel dev で body が undefined になるケースがあるのでガード
    const body = req.body ?? {};
    const message = body.message;
    if (!message) return res.status(400).json({ error: "message is required" });

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) return res.status(500).json({ error: "OPENAI_API_KEY is missing" });

    // import を関数内に入れて「ロード時クラッシュ」を回避・可視化
    const { default: OpenAI } = await import("openai");

    const client = new OpenAI({ apiKey });
    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: message,
    });

    return res.status(200).json({ text: response.output_text });
  } catch (e) {
    console.error("api/chat error:", e);
    return res.status(500).json({ error: String(e?.message ?? e) });
  }
}
