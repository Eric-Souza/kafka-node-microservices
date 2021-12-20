import express from 'express';
import { Kafka } from 'kafkajs';

import routes from './routes';

const app = express();

// Connects to Kafka
const kafka = new Kafka({
  clientId: 'api',
  brokers: ['localhost:9092'],
});

const producer = kafka.producer();

// Middleware that enables producer to every route
app.use((req, res, next) => {
  req.producer = producer;

  return next();
});

app.use(routes);

async function run() {
  // await producer.connect();

  app.listen(3333);
}

run().catch(console.error);
