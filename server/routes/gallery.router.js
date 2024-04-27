const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  const sqlText = `
    UPDATE "gallery"
    SET "like" = "likes" + 1
    WHERE "id" = $1;
  `
  const sqlValues = [req.params.id]

  pool.query(sqlText, sqlValues)
    .then((dbRes) => {
      res.sendStatus(200)
    })
    .catch((dbErr) => {
      console.log('PUT /api/gallery/:id error', dbErr)
      res.sendStatus(500); 
    })
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
