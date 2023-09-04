const express = require('express');
const connectDB = require('./config/dbConnect');
const app = express();
require('dotenv').config();
const cors = require('cors')
const authRoutes = require('./routes/authRoutes')
const taskRoutes = require('./routes/taskRoutes')

PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

connectDB();

app.use('/api/user', authRoutes);
app.use('/api/task', taskRoutes);

app.get('/', (req, res) => {
    res.send('Hello...')
})

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
})