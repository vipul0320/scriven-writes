
import express from 'express';
import { createOnboardingSolo, getOnboardingSolos } from '../controllers/soloController.js';
import formidable from "express-formidable";
import multer from 'multer';

const router = express.Router();
const upload = multer(); 
// Create OnboardingSolo
router.post('/create-solo', upload.single('file'),createOnboardingSolo);

// Get all OnboardingSolos
router.get('/get-solo', getOnboardingSolos);

export default router;
