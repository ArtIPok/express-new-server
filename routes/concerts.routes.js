const express = require('express');
const router = express.Router();
const db = require('./../db');

router.route('/concerts').get((req, res) => {
  res.json(db.concerts);
});

router.route('/concerts/:id').get((req, res) => {
  res.json(db.concerts[req.params.id]);
});

router.route('/concerts').post((req, res) => {
  const { id, author, text} = req.body;

  res.send('message: OK');
});

router.route('/concerts/:id').put((req, res) => {
  const { author, text } = req.body;

  res.send('message: OK');
});

router.route('/concerts/:id').delete((req, res) => {
  res.send('message: OK');
});

module.exports = router;