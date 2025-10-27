import express from 'express';
import configViewEngine from './configs/viewEgine.js';
import initWebRoutes from './routes/web.js';
require('dotenv').config(); //lay duoc cac file trong .env

import bodyParser from 'body-parser';



const app = express();
const PORT = process.env.PORT || 8080;
configViewEngine(app);

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

initWebRoutes(app);


app.listen(PORT, () => {
    console.log('Server is running on port = ' + PORT);
})