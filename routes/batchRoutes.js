import express from 'express';
import { batchInfo } from '../controllers/batchController.js';
const router = express.Router();

//this route is public . 
router.get('/batchinfo/:batchId', batchInfo);



export default router;
