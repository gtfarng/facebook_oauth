const express = require('express');
const session = require('express-session')
const env = require('dotenv').config() 

const app = express();
const FB            = require('./fb')
const routes        = require('./routes')
 
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 },
   resave : false, saveUninitialized: false }))
app.get('/', routes.index);
app.get('/login/callback', routes.loginCallback);
app.get('/logout', routes.logout);
app.get('/feed', routes.feed);
app.get('/friends', routes.friends); 
app.get('/me', routes.me);

app.listen(process.env.PORT,() =>  console.log('server ready') );
