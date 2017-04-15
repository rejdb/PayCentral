const PORT = 8080;
// const HOSTNAME = 'payr.node.js';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(config.database); // Connection To Mongo Database
mongoose.connection.on('connected', () => { // On Connection 
    console.log('Successfully Connected to database ' + config.database);});
mongoose.connection.on('error', (error) => { // On Database Connection Error
    console.log('Database Error ' + error);});

const app = express();

// NPM Cors
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// View Engine
// app.set('views', path.join(__dirname, 'public/views'));
// app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);

// Body Parser Middle Ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Passport Middle Ware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// Routes
const userRoutes = require('./routes/usersRoute');
app.use('/api/users', userRoutes);

app.use('/', (req, rsp) => {
    rsp.send('Invalid Endpoint');
});

// Server Listener
app.listen(PORT, (req, res) => {
    console.log('Server stated on port ' + PORT);
});