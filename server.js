const express = require('express');
const cors = require('cors');
const db = require('./db.js');

const app = express();

const testimonialsRoutes = require('./routes/testimonials.route');
const concertsRoutes = require('./routes/concerts.routes');
const seatsRoutes = require('./routes/seats.routes');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use('/', testimonialsRoutes);
app.use('/', concertsRoutes);
app.use('/', seatsRoutes);

app.use((req, res) => {
  res.status(404).send('message: Not found ...');
});

app.listen(9000, () => {
  console.log('Server is running on port: 9000')
});