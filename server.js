const  express = require('express');
const app = express();
var port = process.env.port || 3000

app.get('/', (req, res) => res.send('welecom to the app')); 

const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

let apiRoutes = require("./routes/recipe.js")
//Use API routes in the App
app.use('/api', apiRoutes)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//connect to mongoose
const dbPath = 'mongodb://localhost:27017/recipeDB';
const options = { useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options);

mongo.then(()=>{
    console.log('connected');
},error => {
    console.log(error,'error');

})

// Import routes
const recipeRoutes = require('./routes/recipe');

// Middleware to use the routes
app.use('/recipe', recipeRoutes);

app.listen(port, function() {
    console.log("Server is up and running on port"+port);
});