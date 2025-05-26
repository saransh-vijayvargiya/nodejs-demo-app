const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js App deployed via GitHub Actions and Dockers!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
