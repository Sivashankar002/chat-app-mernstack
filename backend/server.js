const express = require("express");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require('./routes/userRoutes');
const chatRoutes = require("./routes/chatRoutes");

const path = require("path");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
require('dotenv').config({ path: path.resolve(__dirname, './.env') });

connectDB();
const app = express();

app.use(express.json());// to accept JSON DATA
app.get('/', (req, res) => {
    res.send('Api is running successfully');
})

app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);
app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 5000;
app.listen(5000, console.log(`Server started on port ${PORT}`.yellow.bold));