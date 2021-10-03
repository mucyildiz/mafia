const express = require('express');
const keys = require('./config/keys');
//require('./services/passport');

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

require('./routes/authRoutes')(app);
require('./routes/dbRoutes')(app);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))

  const path = require('path');
  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))