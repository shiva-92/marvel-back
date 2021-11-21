const express = require("express");
const app = express();
const formidableMiddleware = require("express-formidable");
app.use(formidableMiddleware());
const cors = require("cors");
app.use(cors());

const axios = require("axios");

//ROUTE 1 comics
app.get("/comics", async (req, res) => {
  const limit = req.query.limit;
  const title = req.query.title; //dans b tu mettra valeur de la clé title (qui se trouve dans req.query.title)
  const skip = req.query.skip;

  console.log(title);

  const response = await axios.get(
    `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=BeZrs5P2VppMGZVR&title=${title}&limit=${limit}&skip=${skip}`
  );

  res.json(response.data); //ce que tu renvoies au front
});

//ROUTE perso
app.get("/characters", async (req, res) => {
  const name = req.query.name;
  const limit = req.query.limit;
  const skip = req.query.skip;

  console.log(name);

  const response = await axios.get(
    `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=BeZrs5P2VppMGZVR&limit=${limit}&name=${name}&skip=${skip}`
  );

  res.json(response.data);
  console.log(response.data);
});

//ROUTE 3
app.get("/id", async (req, res) => {
  const idnumber = req.query.id;

  console.log(idnumber);
  const response = await axios.get(
    `https://lereacteur-marvel-api.herokuapp.com/comics/${idnumber}?apiKey=BeZrs5P2VppMGZVR`
  );
  res.json(response.data);
});

app.listen(process.env.PORT || 3000);
