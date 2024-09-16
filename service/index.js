const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config({path: '../config.env'})

const app = express();
app.use(bodyParser.json());

console.log('MONGODB_URI:', process.env.MONGODB_URI);
console.log('PORT:', process.env.PORT);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

app.use(bodyParser.json());
app.use(express.json());

// Auth routes
const authRoutes = require('./auth');
app.use('/auth', authRoutes);


const port = process.env.PORT ;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});