const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post('/exploit', (req, res) => {
  console.log(req.body);
  const payload = { success: true, data: {} };
  res.send(payload);
});

app.use(express.static('public'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is up at port ${port}`);
});
