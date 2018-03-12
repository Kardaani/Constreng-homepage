'use strict';

const express = require('express');
const xoauth2 = require('xoauth2');
const nodemailer = require('nodemailer');
//var config = require('./config.js');
const ejs = require('ejs');
const fs = require('fs');
var app = express();
const path = require('path');


// make the entire contents of public directory accessible
app.use( express.static(
	path.join(__dirname, '../', 'public'),
	{
		// index: false, // don't look for index.html files in sub directories.
		extensions:['html']
	})
);



let smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'karieronen71@gmail.com',
        pass: 'PikkuTikka8'
    }
});




app.get('/', function (req, res) {
    res.sendFile('/../public/index.html');
});

app.get('/send', function (req, res) {

    var mailOptions = {
        to: req.query.to,
        subject: 'Contact Form Message',
        from: "Contact Form Request" + "<" + req.query.from + '>',
        html:  "From: " + req.query.name + "<br>" +
               "User's email: " + req.query.user + "<br>" +     "Message: " + req.query.text
    }

    console.log(mailOptions);

    smtpTrans.sendMail(mailOptions, function (err, response) {
        if (err) {
            console.log(err);
            res.end("error");
        } else {
            console.log("Message sent: " + response.message);
            res.end("sent");
        }
    });

});

app.listen(8080, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening on port on 8080");
    }
});
