import express from 'express';
import Loaders from './loaders';
import config from './config';
import cors from 'cors';

async function startServer() {
  const app = express();
  app.use(cors());
  await Loaders({ expressApp: app });
  app
    .listen(config.port, () => {
      console.log(`
      <===== Server listening on port: ${config.port} =====>
    `);
    })
    .on('error', (err: Error) => {
      console.log(err);
      process.exit(1);
    });
}

startServer();