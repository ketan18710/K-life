const express = require('express');
const os = require('os');
const fs = require('fs');
const data = require('./data.json');
const app = express();
const port = process.env.port || 3000;

app.use(express.json());

app.get('/api', (req, res) => {
  //   console.log(os.arch());
  res.send(data);
});

// app.get('/:firstName/:secondName/:age', (req, res) => {
//   console.log(os.arch());
//   res.send(req.params);
// });

// app.put('/changes', data => {
//   fs.writeFile(
//     'data.json',
//     JSON.stringify({
//       firstName: 'kanav',
//       secondName: 'bhatia',
//       age: '23',
//     }),
//     function(err) {
//       if (err) throw err;
//       console.log('Saved!');
//     },
//   );
// });

app.post('/push', (req, res) => {
  console.log(req.body);
  if (req.body) {
    fs.writeFile('./data.json', JSON.stringify(req.body), err => {
      console.log(err);
      res.status(422).send(err);
    });
    res.send('Data Fetched Successfully');
  } else res.send('Incorrect data format');
});

app.get('*', (req, res) => {
  res.status(404).send('Invalid API');
});

app.listen(port, () => console.log(`RUNNING ON PORT ${port}`));
