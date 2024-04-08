
import mongoose from 'mongoose';

const OnboardingAnthoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  packagee: {
    type: String,
    required: true,
  },
  
});

const OnboardingAntho = mongoose.model('OnboardingAntho', OnboardingAnthoSchema);

export default OnboardingAntho;
