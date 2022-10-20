const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
const {v4: uuidv4} = require('uuid');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends: false}));

app.get('/attraction', async (req, res) => {
  const attr = await db.query('select * from attraction');
  res.json(attr.rows);
});

app.post('/attraction', async (req, res) => {
  console.log(req.body);
  const {name, picture} = req.body;
  const id = uuidv4();
  const newAttr = await db.query(
    `insert into attraction(id,name,picture) values ('${id}','${name}', '${picture}')`,
  );

  res.json(newAttr.rows);
});

const PORT = 5001;

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
