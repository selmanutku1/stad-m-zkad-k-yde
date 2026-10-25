import express from 'express';
import { createServer } from 'vite';
import path from 'path';

async function startServer() {
  const app = express();
  app.use(express.json());

  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });

  app.use(vite.middlewares);

  app.post('/api/submit-opinion', (req, res) => {
    const { name, text, city } = req.body;
    console.log('Opinion received:', { name, text, city, to: 'selmanutkumarmara@gmail.com' });
    // In a real application, implement nodemailer or an email API here.
    res.status(200).json({ message: 'Success' });
  });

  app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });
}

startServer();
