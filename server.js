const express = require('express');
const connectDB = require('./config/db');
const fileupload = require('express-fileupload');
const path = require('path');
const cookieParser=require('cookie-parser');
const bodyParser=require('body-parser')

const app = express();

//connect to db
connectDB();


//Init middleware
app.use(express.json({ extended: false }));


//Cookie parser
app.use(cookieParser())

//body parser
app.use(express.urlencoded({extended:false}))

 
app.get('/', (req, res) => res.send('API RUNNING'));

//File uploading
app.use(fileupload());

//Set static folder
app.use('/public',express.static(path.join(__dirname)));

//Define route
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/categorie', require('./routes/api/categories'));
app.use('/api/competance', require('./routes/api/competances'));
app.use('/api/forgotpassword', require('./routes/api/forgotpassword'));




const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running in port ${PORT} `));
