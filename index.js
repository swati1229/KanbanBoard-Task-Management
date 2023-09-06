const express = require('express');
const connectDB = require('./config/dbConnect');
const app = express();
require('dotenv').config();
const cors = require('cors')
const authRoutes = require('./routes/authRoutes')
const taskRoutes = require('./routes/taskRoutes')
const path = require('path')

PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, './client/build')))

//connecting database
connectDB();

//routes
app.use('/api/user', authRoutes);
app.use('/api/task', taskRoutes);

//rest API
app.use('*',function(req, res){
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.get('/', (req, res) => {
    res.send('Hello...')
})

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
})