const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')

// PUT /gallery/like/:id
router.put('/:id', (req, res) => {
  const sqlText = `
    UPDATE "gallery"
    SET "likes" = "likes" + 1
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

// POST /gallery 

router.post('/', (req, res) => {
  const newGalleryItem = req.body;
  const sqlText = `
    INSERT INTO gallery
    (url, title, description)
    VALUES ($1, $2, $3);
  `
  pool.query(sqlText, [newGalleryItem.url, newGalleryItem.title, newGalleryItem.description])
  .then((result) => {
    res.sendStatus(201);
  })
  .catch((error) => {
    console.log('Error in POST route', error);
    res.sendStatus(500); 
  })
})

// DELETE /gallery 

router.delete('/:id', (req, res) => {
  const sqlText = `
    DELETE FROM "gallery"
    WHERE "id" = $1;
  `
  const sqlValues = [req.params.id]

  pool.query(sqlText, sqlValues)
    .then((dbRes) => {
      res.sendStatus(200)
    })
    .catch((dbErr) => {
      console.log('Error in DELETE route', dbErr);
      res.sendStatus(500)
    })

})



module.exports = router;
