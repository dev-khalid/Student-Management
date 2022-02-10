import express from 'express'; 
import dotenv from 'dotenv'; 
import path from 'path'; 
dotenv.config(); 
const __dirname = path.resolve();
const app = express();

app.get('/api',(req,res,next) => { 
  res.send("Hello from Backend"); 
})  




if (process.env.NODE_ENV == 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
  });
}
const PORT = process.env.PORT || 5000; 
app.listen(PORT,() => console.log(`Server is running on port ${PORT}`))