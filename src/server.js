import express from 'express';
import configViewEngine from './configs/viewEgine.js';
import initWebRoutes from './routes/web.js';
require('dotenv').config(); //lay duoc cac file trong .env

const app = express();
const PORT = process.env.PORT || 8080;
configViewEngine(app);

initWebRoutes(app);


app.listen(PORT, () => {
    console.log('Server is running on port = ' + PORT);
})