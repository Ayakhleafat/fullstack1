const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the server!");
  });

  app.get("/getData", (req, res) => {
    const data = {
      name: "Aya",
      age: 20,
      field: "Computer Engineering"
    };
  
    res.json(data);
  });
  app.get("/getPrice", (req, res) => {
   
    const prices = {
      price1: 10.99,
      price2: 20.49
    };
  
  
    res.json(prices);
  });
  

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
