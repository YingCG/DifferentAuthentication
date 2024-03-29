const express = require('express')
const sessions = require('express-session')

const LoginHandler = require('./login.js')
const ProcessLoginHandler = require('./process-login.js')
const HomeHandler = require('./home.js');
const LogoutHandler = require('./logout.js')

const app = express()


app.use(sessions({
    secret: "jellybean",
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // 24 hours
    },
    resave: true,
    saveUninitialized: false,
}))

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.get('/', HomeHandler);
app.get('/login', LoginHandler)
app.post('/process-login', ProcessLoginHandler)
app.get('/logout', LogoutHandler);

app.listen(3000, () => {
    console.log(`Server Running at port 3000`)
})
