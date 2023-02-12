const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3000

app.set('view engine', 'pug')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))


main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    mongoose.set('strictQuery', true)
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

    const kittySchema = new mongoose.Schema({
        name: String
    });

    const Kitten = mongoose.model('Kitten', kittySchema);

    const silence = new Kitten({ name: 'Hamurrabi' });
    console.log(silence.name);

    const asdf = {
        title: 'HEyz',
        turb: 'Mongoose',
        message: '54Ya 4lAyyy 131ngitzzz',
        paragraph: 'zaya k4muuu zayankkkk'
    }

    app.get('/', (req, res) => {
        res.render('index', asdf);
    })

    app.listen(port, () => {
        console.log(`Listening ${port}`);
    })
}