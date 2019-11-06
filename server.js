const express = require('express');

const app = express();
app.use(express.json());

app.use('/api/users', require('./routes/users'));
app.use('/api/event', require('./routes/event'));

const port  = 5000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});