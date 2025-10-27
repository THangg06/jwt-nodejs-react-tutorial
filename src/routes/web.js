import express from 'express';
import { homeController } from '../controller/homeController';
import { home } from 'nodemon/lib/utils';
const router = express.Router();



const initWebRoutes = (app) => {
    // router.get('/', (req, res) => {
    //     return res.send('Hello World!');
    // })
    router.get('/', homeController.handlerHelloWorld);
    router.get('/user', homeController.handlerUserPage);
    router.post('/users/create-user', homeController.handlerCreateNewUser);
    return app.use('/', router);
}

export default initWebRoutes;