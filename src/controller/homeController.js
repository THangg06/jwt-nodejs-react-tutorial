
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

        res.redirect("/user")
    },
    handlerGetAllUsers: (req, res) => {
        let users = userService.getUserList();
        return res.render('user.ejs', { users: users });
    },
    handlerDeleteUser: async (req, res) => {
        let id = req.params.id;
        if (id) {
            userService.deleteUser(id);
            return res.redirect('/user');
        } else {
            return res.send('User not found');
        }
    },
    getUpdateUser: async (req, res) => {
        let id = req.params.id;
        let user = await userService.getUserByID(id);
        let userData = {};
        if (user && user.length > 0) {
            userData = user[0];

        }
        res.render('user-update.ejs', { userData });
    },
    handlerUpdateUser: async (req, res) => {
        let id = req.body.id;
        let email = req.body.email;
        let username = req.body.username;
        await userService.updateUser(id, email, username);
        return res.redirect('/user');
    }
};

