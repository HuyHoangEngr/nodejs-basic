import express from 'express';
import configViewEngine from './configs/viewEngine';

const app = express();
const port = 8081

configViewEngine(app);

app.get('/', (req, res) => {
    res.render('test/index.ejs')
})
app.get('/about', (req, res) => {
    res.send("I'm Huy!")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})