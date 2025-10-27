
import { userService } from '../service/userService.js';
export const homeController = {
    handlerHelloWorld: (req, res) => {
        return res.render('home.ejs');
    },
    handlerUserPage: (req, res) => {

        return res.render('user.ejs');
    },
    handlerCreateNewUser: (req, res) => {
        let email = req.body.email;
        let password = req.body.password;
        let username = req.body.username;

        userService.getUserList();
        // userService.createNewUser(email, password, username);
        return res.send('Create new user successfully!');
    },
    handlerGetAllUsers: (req, res) => {
        let users = userService.getUserList();
        return res.render('user.ejs', { users: users });
    }
};

