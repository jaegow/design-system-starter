import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import chalk from 'chalk';
import { loadMockJsonFile } from './helpers';
import { CORS } from './middleware/middleware-cors';

const app = express();
const server_port = process.env.MOCK_SERVER_PORT || 3333;

const asyncMiddleware = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

const static_path = path.resolve(__dirname, 'static');

async function buildServer() {
  try {
    const jsonParser = bodyParser.json();
    app.use(express.static(static_path));
    app.use(jsonParser);
    app.use(CORS);

    // mock endpoints
    app.post('/test', asyncMiddleware(async (req, res, next) => {
      try {
        const { url } = req;
        console.log(chalk.green('url'), url, chalk.yellow('req.body'), req.body);
        const json = await loadMockJsonFile({ apiUrl: url, fileRoot: static_path });
        res.json(json);
      } catch (err) {
        res.json({ error: err });
      }
    }));

    const server = app.listen(server_port, () => {
      console.log('buildServer()', `Server is running on http://localhost:${server_port}`);
    });

    return server;
  } catch (err) {
    console.error(err);
  }
}

buildServer();
