const express = require('express');

const app = express();

const cors = require('cors');
app.use(cors());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))