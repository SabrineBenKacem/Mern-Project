const express = require("express");
const cors = require('cors')
const app = express();
const cookies = require('cookie-parser')


require('dotenv').config();

const PORT = process.env.PORT;
const DB = process.env.DB;
app.use(express.static('public'));


app.use(express.json(), express.urlencoded({ extended: true }), cors({credentials:true, origin:"http://localhost:5173"}), cookies());
require('./config/mongoose.config')(DB)
require('./routes/posts.routes')(app)
require('./routes/booking.routes')(app)
require('./routes/users.routes')(app)
require('./routes/auth.routes')(app)
require('./routes/client.routes')(app)
require('./routes/files.routes')(app)


app.listen(PORT, () => console.log(`🚀🚀🚀🚀 >>> SERVER IS RUNNING ON PORT ${PORT} <<< 🚀🚀🚀`))
