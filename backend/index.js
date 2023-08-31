import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Jordan010623$$",
  database: "test",
});

app.get("/", (req, res) => {
  res.json("hello this is the backend");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM test.books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`, `desc`,`price`, `cover`) VALUES (?)";
  const values = [req.body.title, req.body.desc,req.body.price, req.body.cover];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been created sucessfully");
  });
});

app.listen(8800, () => {
  console.log("connected to backend");
});

app.delete("/books/:id")