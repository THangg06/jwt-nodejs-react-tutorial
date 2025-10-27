import bcrypt from 'bcryptjs';
import mysql from 'mysql2';


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt',
});

const salt = bcrypt.genSaltSync(10);
export const userService = {
    hashUserPassword: (userPassword) => {
        return bcrypt.hashSync(userPassword, salt)
    },

    createNewUser: (email, password, username) => {
        let hashedPass = userService.hashUserPassword(password);
        connection.query(
            'INSERT INTO users (email, password, username) VALUES (?, ?, ?)'
            , [email, hashedPass, username],
            function (err, results, fields) {
                if (err) {
                    console.log(err);
                }

            }
        );


    },
    getUserList: () => {
        let users = [];
        connection.query(
            'SELECT * FROM users'
            ,
            function (err, results, fields) {
                if (err) {
                    console.log(err);
                }
                console.log(results);
            }
        );
    }
}


