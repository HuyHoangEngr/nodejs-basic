
import express from "express";
import homecontroller from "../controllers/homeController";

let router = express.Router();
const initWebRoute = (app) => {
    router.get('/', homecontroller.getHomePage); // route call controller in MVC

    router.get('/about', (req, res) => {
        res.send("I'm Huy!")
    })

    return app.use('/', router)
}
export default initWebRoute;