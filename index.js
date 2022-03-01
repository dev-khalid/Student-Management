import express from 'express'; 
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import mongoose from 'mongoose';
import './passport.js';
import userRoutes from './routes/userRoutes.js';
import examRoutes from './routes/examRoutes.js';
import teacherRoutes from './routes/teacherRoutes.js';
import studentRoutes from './routes/studentRoutes.js';
import batchRoutes from './routes/batchRoutes.js';
import subjectRoutes from './routes/subjectRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js'; 

dotenv.config();
const __dirname = path.resolve();

//Database Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => console.log('Connected to Database🚀🚀🚀'))
  .catch((err) => console.log('Failed Db Connection😟'));

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api', (req, res, next) => {
  res.send('Hello from Backend');
});

app.use('/api/user', userRoutes);
app.use('/api/teacher', teacherRoutes);
app.use('/api/student', studentRoutes);
app.use('/api/batch', batchRoutes);
app.use('/api/exam', examRoutes);
app.use('/api/subject', subjectRoutes);
app.use('/api/payment', paymentRoutes);
app.use((err, req, res, next) => {
  /**@TODO - I NEED TO SUTDY ABOUT CUSTOM ERROR HANDLER  */
  if (err.message.includes('duplicate key error')) {
    res.send({
      success: false,
      error: 'Email Already Exists',
    });
  } else {
    next();
  }
});
/**@TODO need to create a custom error handler.  */

if (process.env.NODE_ENV == 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));



 