import express from 'express'; 
import dotenv from 'dotenv'; 
dotenv.config(); 
const app = express();

app.get('/api',(req,res,next) => { 
  res.send("Hello from Backend"); 
}) 

const PORT = process.env.PORT || 5000; 
app.listen(PORT,() => console.log(`Server is running on port ${PORT}`))