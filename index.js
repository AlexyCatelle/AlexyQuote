import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.send('A toi de jouer');
});

app.use((req, res) => {
  res.sendStatus(404);
});

app.listen(port, () => {
  console.log(`app sur http://localhost:${port}/`);
});