const express = require('express');
const app = express();
const ig = require('ig-unduh'); // Make sure this package is installed

app.get('/', (req, res) => {
  res.send('<h1>Instagram API</h1>');
});

app.get('/ig', async (req, res) => {
  const link = req.query.url;

  try {
    const result = await ig(link); 
    res.json(result);
    console.log(result);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Error retrieving Instagram data'); // Send an error status
  }
});

app.listen(4100, () => {
  console.log('Server running on port 4100...');
});