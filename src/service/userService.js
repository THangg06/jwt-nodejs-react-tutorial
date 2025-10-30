import bcrypt from 'bcryptjs';
import mysql from 'mysql2';
import bluebird from 'bluebird';





const salt = bcrypt.genSaltSync(10);
export const userService = {
    hashUserPassword: (userPassword) => {
        return bcrypt.hashSync(userPassword, salt)
    },

    createNewUser: async (email, password, username) => {
        let hashedPass = userService.hashUserPassword(password);
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'jwt',

        }).promise();
        try {
            const [rows, fields] = await connection.execute(
                'INSERT INTO users (email, password, username) VALUES (?, ?, ?)'
                , [email, hashedPass, username],
            );

        } catch (error) {
            console.log(error);
        }


    },
    getUserList: async () => {
        let users = [];
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'jwt',

        }).promise();
        try {
            const [rows, fields] = await connection.execute(
                'SELECT * FROM `users`'
            );
            return rows;
        } catch (error) {
            console.log(error);
        }
    },
    deleteUser: async (id) => {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'jwt',

        }).promise();
        try {
            const [rows, fields] = await connection.execute(
                'DELETE FROM `users` WHERE id = ?', [id]
            );
            return rows;
        } catch (error) {
            console.log(error);
        }
    },
    updateUser: async (id, email, username) => {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user:
                'root',
            database: 'jwt',
        }).promise();
        try {
            const [rows, fields] = await connection.execute(
                'UPDATE  `users` set email = ?, username =?  WHERE id = ?', [email, username, id]
            );
            return rows;
        } catch (error) {
            console.log(error);
        }
    },
    getUserByID: async (id) => {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'jwt',
        }).promise();
        try {
            const [rows, fields] = await connection.execute(
                'SELECT * FROM `users` WHERE id = ?', [id]
            );
            return rows;
        } catch (error) {
            console.log(error);
        }

    },

};


