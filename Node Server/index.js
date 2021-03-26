const express = require('express');
const os = require('os');
const fs = require('fs');
const data = require('./data.json');
const app = express();
const port = process.env.port || 3000;

app.get('/api', (req, res) => {
  //   console.log(os.arch());
  res.send(data);
});

app.get('/:firstName/:secondName/:age', (req, res) => {
  console.log(os.arch());
  res.send(req.params);
});

app.put('/changes', data => {
  fs.writeFile(
    'data.json',
    JSON.stringify({
      firstName: 'kanav',
      secondName: 'bhatia',
      age: '23',
    }),
    function(err) {
      if (err) throw err;
      console.log('Saved!');
    },
  );
});

app.listen(port, () => console.log(`RUNNING ON PORT ${port}`));
