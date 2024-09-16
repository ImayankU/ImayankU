const express = require('express');
const connectDB = require('./config/db');
const providerRoutes = require('./routes/providerRoutes');
const port = 4000;

const app = express();


connectDB();

app.use(express.json());
app.use('/api/providers', providerRoutes);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
