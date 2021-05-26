const express = require('express');
const router = express.Router();
const db = require('./../db');
const { delete } = require('./concerts.routes');


router.route('/testimonials').get((req, res) => {
  res.json(db.testimonials);
});

router.route('/testimonials/:id').get((req, res) => {
  res.json(db.testimonials[req.params.id]);
});

router.route('/testimonials/random').get((req, res) => {
  res.json(db.rand());
});

router.route('/testimonials').post((req, res) => {
  const { id, author, text} = req.body;

  res.send('message: OK');
});

router.route('/testimonials/:id').post((req, res) => {
  const { author, text } = req.body;

  res.send('message: OK');
});

router.route('/testimonials/:id').delete((req, res) => {
  res.send('message: OK');
});

module.exports = router;