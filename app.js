require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mailApi = require('./routes/mailapi');
const app = express();
const port = process.env.PORT || 3000;

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON
app.use(bodyParser.json());
// Use the mail API route
app.use('/api/mail', mailApi);

app.get('/', (req, res) => {
  res.render('index', { title: 'Lambda Africa' });
});

// Dynamic route for all other pages
app.get('/:page', (req, res) => {
  const page = req.params.page;
  res.render(page, { title: page }); // assuming your EJS files are named after their URL path
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
