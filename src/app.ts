import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import routes from './routes'

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.get('/', (req: Request, res: Response) => res.send('Express + TypeScript Server') );

app.use('/api', routes)

app.listen(port, () => console.log(`⚡️[server]: localhost:${port}`) );