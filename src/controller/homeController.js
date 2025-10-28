
import { userService } from '../service/userService.js';
export const homeController = {
    handlerHelloWorld: (req, res) => {
        return res.render('home.ejs');
    },
    handlerUserPage: async (req, res) => {
        let userList = await userService.getUserList();
        console.log('>>>check userList:', userList);
        return res.render('user.ejs', { userList });
    },
    handlerCreateNewUser: (req, res) => {
        let email = req.body.email;
        let password = req.body.password;
        let username = req.body.username;
        userService.createNewUser(email, password, username);

        return res.send('Create new user successfully!');
    },
    handlerGetAllUsers: (req, res) => {
        let users = userService.getUserList();
        return res.render('user.ejs', { users: users });
    }
};

