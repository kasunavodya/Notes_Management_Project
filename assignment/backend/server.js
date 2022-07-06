 const express = require('express');
 const mongoose = require('mongoose');
 const bodyparser = require('body-parser');
 const cors = require('cors');
 const dotenv = require('dotenv');
 
 dotenv.config();
 
 const app = express();
 
 app.use(bodyparser.json());
 app.use(cors());
 
 const UserRoutes = require('./routes/User');
 const UserReport = require('./routes/UserReport');
 const NoteRoutes = require('./routes/Note');

 app.use("/user", UserRoutes);
 app.use("/userreport", UserReport);
 app.use("/note", NoteRoutes);

 const PORT = process.env.PORT || 3001;
 const MONGODB_URI = process.env.MONGODB_URI;
 
 mongoose.connect(MONGODB_URI || '&w=majority', {
     useNewUrlParser: true,
     useUnifiedTopology: true,
 }, (error) => {
     if (error) {
         console.log('Error in connection: ', error.message);
     }
 });

 mongoose.connection.once('open', () => {
     console.log('Database Synced!!');
 })

 app.listen(PORT, () => {
     console.log(`Server is started and running on ${PORT}`);
 });
 
 
 