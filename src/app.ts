import express, { Application, Request, Response } from 'express';
import cors from 'cors';
// import router from './app/router';
const app: Application = express();
app.use(express.json());
app.use(cors());
// app.use('/api/v1', router);
// app.use('/api/v1');
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
