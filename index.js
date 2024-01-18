import express from 'express';
import * as dotenv from 'dotenv';
import router from './app/routers.js';


dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

// on configure le moteur de template
app.set('view engine', 'ejs');
// on configure le chemin vers le dossier des views
app.set('views', './app/views/');
// ...

app.use ((req, res, next)=>{
  res.locals.data = data;
  next();
})

app.use(express.static('./public'));
app.use(router);


app.use((req, res) => {
  res.sendStatus(404);
});

app.listen(port, () => {
  console.log(`app sur http://localhost:${port}/`);
});