const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

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
    console.log(`Listening http://localhost:${port}`);
})