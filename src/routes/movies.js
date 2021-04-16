const { Router } = require("express");
const router = Router();
const movies = require("./dataSample.json");
const _ = require("underscore");

router.get("/", (req, res) => {
  res.json(movies);
});

router.post("/", (req, res) => {
  const id = movies.length + 1;
  const newMovie = { ...req.body, id };
  const { title, director, year, rating } = req.body;
  if (title && director && year && rating) {
    movies.push(newMovie);
    res.json(movies);
  } else {
    res.json(movies);
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const { title, director, year, rating } = req.body;
  if (title && director && year && rating) {
    movies.forEach((movie, i) => {
      if (movie.id === id) {
        movies.splice(i, 1);
      }
    });
  } else {
    res.send("wrong request");
  }
  /*  const result = movies.filter((movie) => {
    return movie.id !== id;
  }); */
  res.send(movies);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, director, year, rating } = req.body;

  if (title && director && year && rating) {
    movies.forEach((movie, i) => {
      if (movie.id === id) {
        movie.title = title;
        movie.director = director;
        movie.year = year;
        movie.rating = rating;
      }
    });
    res.json(movies);
  } else {
    res.send("wrong request");
  }
  res.send(movies);
});

module.exports = router;
