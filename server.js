const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const blog = require('./routes/api/blog');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());
app.use(express.urlencoded({limit: '50mb', extended: false,  parameterLimit:50000}));
app.use(bodyParser.json());
// Define Routes
app.use('/api/blog', blog);


// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
