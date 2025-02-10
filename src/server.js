import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './routes/web';
// import connection from './configs/connectDB';

require('dotenv').config()

const app = express();
const port = process.env.PORT || 8080;
console.log('>>check port: ', port);

//settup view engine
configViewEngine(app);

//init web route
initWebRoute(app);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})