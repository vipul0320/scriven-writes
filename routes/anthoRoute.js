
import express from 'express';
import { createOnboardingAntho, getOnboardingAnthos } from '../controllers/anthoController.js';



const router = express.Router();

// Create OnboardingAntho
router.post('/create-antho',createOnboardingAntho);

// Get all 
router.get('/get-antho', getOnboardingAnthos);

export default router;
