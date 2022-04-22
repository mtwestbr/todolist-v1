//jshint esversion: 6

let express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")

let app = express()
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))
app.set('view engine', 'ejs');

const port = 3000;
const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.get("/", function(req, res) {
  const day = date.getDate();
  res.render("list", {
    listTitle: day,
    newListItems: items
  });
})

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems
  });
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.post("/", function(req, res) {
  const item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work")
  } else {
    items.push(item);
    res.redirect("/")
  }
});

app.post("/work", function(req, res) {
  item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work")
});

app.listen(port, function() {
  console.log(`Server is running on port ${port}`);
})
