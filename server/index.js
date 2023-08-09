const express = require('express')
const app = express()
require('dotenv').config();
const port = 8080 || process.env.PORT;
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
});

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/auth/login', require('./routes/login.js'));
app.use('/api/auth/signUp', require('./routes/signUp.js'));
app.use('/api/editProfile', require('./routes/editProfile.js'));
app.use('/api/favourites', require('./routes/favourites.js'));
app.use('/api/getProfile', require('./routes/getProfile.js'));


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})