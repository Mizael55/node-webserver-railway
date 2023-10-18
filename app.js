require('dotenv').config();
const express = require("express");
const hbs = require('hbs');
const app = express();

const port = process.env.PORT;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


// Middleware -  servir contenido estático
app.use(express.static("public"));


app.get("/", (req, res) => {
  res.render("home",{
    nombre: "Mizael Soler",
    titulo: "Curso de Node"
  })
});

app.get("/generic", (req, res) => {
  res.render('generic');
});

app.get("/elements", (req, res) => {
  res.render('elements');
}); 


app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
