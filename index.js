const express = require('express')
const app = express()
const port = 8001;

const { companyInfo, errorMessages } = require('./mymodule');



app.use(express.static('public'))

app.set('view engine', 'ejs')


// Home page
app.get('/', (req, res) => {
    res.render('index', { company: companyInfo });
});

// Error page
app.use((req, res) => {
    res.status(404).render('error', { errorMsg: errorMessages.notFound });
});


app.get('/about', (req, res) => {
    res.render('about', { company: companyInfo }) // placeholder only. replace.
});

app.get('/contact', (req, res) => {
    res.render('contact', { company: companyInfo }) // placeholder only. replace.
});

app.get('/services', (req, res) => {
    res.render('services', { company: companyInfo }) // placeholder only. replace.
});



app.listen(port, 'localhost', () => {
    console.log("Running on port " + port)
});
