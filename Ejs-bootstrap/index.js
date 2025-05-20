const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json");

app.use(express.static(path.join(__dirname, "public")));

//tell app to use ejs
//since we install and se, we dont need to require ejs
//set is a method of express() object
app.set("view engine", "ejs");

//to set views pah to work/run from anywher
app.set("views", path.join(__dirname, "/views"));

//homepage
app.get("/", (req, res) => {
  res.render("home.ejs");
});

//route to rand
app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  //specify dir name (i.e random)
  res.render("random", { num });
});
app.get("/cats", (req, res) => {
  cats = ["lil", "kit", "ginger"];

  res.render("cats", { cats });
});
app.get("/r/:subreddit", (req, res) => {
  //gets the typed url after /r/

  const { subreddit } = req.params;

  //reddit or redditt.ejs- path and sunreddit=what should be specified in template

  const data = redditData[subreddit];
  if (data) {
    res.render("reddit", { ...data });
  } else {
    res.render("not found", { subreddit });
  }
});

app.get("*", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
