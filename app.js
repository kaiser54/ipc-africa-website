const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');
const { response } = require('express');

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'dist')))

app.post('/subscribe', (req, res) => {
    // console.log('hey')
    const {email, js} = req.body;
    console.log(req.body);


    const mcData = {
        members: [
            {
                email_address: email,
                status: 'Subscribed'
            }
        ]
    }

    const mcDataPost = JSON.stringify(mcData);

    const options = {
        url: 'https://us17.api.mailchimp.com/3.0/lists/9e612abf98',
        method: 'POST',
        headers: {
            Authorization: 'auth d88237aaeb7e6b3142812e1cfbc4ce87-us17'
        },
        body: mcDataPost
    }

    if (email) {
        request(options, (err, response, body) => {
            if (err) {
                res.json({error: err})
            } else {
                if (js) {
                    res.sendStatus(200);
                } else {
                    res.redirect('/index.html')
                }
            }
        })
    } else {
        res.status(404).send({message: 'failed'})
        // console.log('failed')
    }
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('server started'))