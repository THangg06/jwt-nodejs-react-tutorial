export const homeController = {
    handlerHelloWorld: (req, res) => {
        //model => get data from database
        return res.render('home.ejs');
    },
    handlerUserPage: (req, res) => {

        return res.render('user.ejs');
    }
};

