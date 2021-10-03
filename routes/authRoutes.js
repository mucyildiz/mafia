const { Client } = require('pg');
const keys = require('../config/keys');

const credentials = {
  user: keys.username,
  password: keys.password,
  port: keys.port,
  host: keys.host,
  database: keys.database
}

module.exports = app => {
  app.get('/api/test', (req, res) => {
    res.send("Successful connection!")
  });

  app.get('/api/test_db', async (req, res) => {
    const client = new Client(credentials);
    await client.connect();
    const result = await client.query('SELECT * FROM users');
    await client.end();
    res.send(result.rows);
  })
}