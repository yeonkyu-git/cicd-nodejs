const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) => {
  res.send("Hello world! This is node APP for CICD. Last Test");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})