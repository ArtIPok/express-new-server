const express = require('express');
const router = express.Router();
const db = require('./../db');

router.route('/seats').get((req, res) => {
  res.json(db.seats);
});

router.route('/seats/:id').get((req, res) => {
  res.json(db.seats[req.params.id]);
});

router.route('/seats').post((req, res) => {
  const { id, author, text} = req.body;

  res.send('message: OK');
});

router.route('/seats/:id').put((req, res) => {
  const { author, text } = req.body;

  res.send('message: OK');
});

router.route('/seats/:id').delete((req, res) => {
  res.send('message: OK');
});

module.exports = router;