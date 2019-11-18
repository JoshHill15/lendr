const express = require("express");
const bodyParser = require("body-parser");
const CORS = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(CORS());

const items = [
  {
    id: 0,
    name: "Spencer",
    username: "Spencer123",
    image: "https://source.unsplash.com/random",
    item: "camera",
    borrowDate: "1/12/14",
    dueDate: "1/22/14"
  },
  {
    id: 1,
    name: "Josh",
    username: "Josh123",
    image: "https://source.unsplash.com/random",
    item: "computer",
    borrowDate: "7/12/18",
    dueDate: "10/22/20"
  }
];

app.get("/api/items", (req, res) => {
  res.send(items);
});

app.get("/api/items/:id", (req, res) => {
  const item = items.filter(item => item.id.toString() === req.params.id)[0];
  res.status(200).json(item);
});

app.post("/api/items", (req, res) => {
  if (req.body.id !== undefined) items.push(req.body);
  res.status(201).json(items);
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
