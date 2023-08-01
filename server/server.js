const express = require('express')
const app = express()
require('dotenv').config();
const port = 3000 || process.env.PORT;
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
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use('./login', require('./routes/login.js'));


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})