const express = require('express')
const app = express()
const port = 8001;

const { companyInfo, errorMessages, team } = require('./mymodule');



app.use(express.static('public'))

app.set('view engine', 'ejs')


// Home page
app.get('/', (req, res) => {
    res.render('index', { company: companyInfo });
});

// About page
app.get('/about', (req, res) => {
    console.log(team);
    res.render('about', { company: companyInfo, team: team });
});

// Contact page
app.get('/contact', (req, res) => {
    res.render('contact', { company: companyInfo });
});

// Services page
app.get('/services', (req, res) => {
    res.render('services', { company: companyInfo });
});

// Error page (must be last)
app.use((req, res) => {
    res.status(404).render('error', { errorMsg: errorMessages.notFound });
});

app.listen(port, 'localhost', () => {
    console.log("Running on port " + port)
});

