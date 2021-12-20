import express from 'express';

const routes = express.Router();

routes.post('/certifications', async (req, res) => {
  const message = {
    user: { id: 1, name: 'Diego' },
    course: 'Kafka with node',
    grade: 5,
  };

  // Call microservice
  await req.producer.send({
    topic: 'issue-certificate',
    messages: [
      {
        value: JSON.stringify(message),
      },
    ],
  });

  return res.json({ ok: true });
});

export default routes;
