import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const SERVER_PORT = process.env.PORT || 3333;

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(SERVER_PORT, () => {
  console.log(`HTTP server running on port ${SERVER_PORT}`);
});
