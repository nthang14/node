const path = require('path');
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3008

app.use(express.static(path.join(__dirname, "static")));

const configHandlebars = {
	defaultLayout: "main",
	extname: ".hbs",
};

app.use(morgan("combined"));
app.engine(".hbs", handlebars.engine(configHandlebars));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources\\views"));

app.get("/home", (req, res) => {
	res.render('home')
});
app.get("/new", (req, res) => {
	res.render("news");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
