const express = require('express')
const app = express()
const port = 8001;

const { companyInfo, errorMessages, team, services, specialties, processSteps, aboutPage, company } = require('./mymodule');

app.use(express.static('public'))
app.set('view engine', 'ejs')

// home page
app.get('/', (req, res) => {
    res.render('index', { company: companyInfo });
});


// contact page
app.get('/contact', (req, res) => {
    res.render('contact', { company: companyInfo });
});

// services page
app.get('/services', (req, res) => {
    res.render('services', { 
        company: companyInfo,
        services: services,
        specialties: specialties,
        processSteps: processSteps
    });
});

// about page
app.get('/about', (req, res) => {
    res.render('about', { 
        company: companyInfo, 
        team: team, 
        aboutPage: aboutPage 
    });
});

// error page (must be last)
app.use((req, res) => {
    res.status(404).render('error', { errorMsg: errorMessages.notFound });
});

app.listen(port, 'localhost', () => {
    console.log("Running on port " + port)
});
