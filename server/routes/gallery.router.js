const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
});

// GET /gallery
router.get('/', (req, res) => {
  const sqlText = `
    SELECT * FROM "gallery"
    ORDER BY "id";
  `
  pool.query(sqlText)
    .then((result) => {
      res.send(result.rows); 
    })
    .catch((error) => {
      console.log('Error making database query in GET route,', error);
      res.sendStatus(500); 
    })
});

module.exports = router;
