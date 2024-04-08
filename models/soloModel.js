
import mongoose from 'mongoose';

const OnboardingSoloSchema = new mongoose.Schema({
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
  language: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  manuscriptStatus: {
    type: String,
    required: true,
  },
  file: {
    data: Buffer, // Store file data as Buffer
    contentType: String, // Store file content type
    
  },
});

const OnboardingSolo = mongoose.model('OnboardingSolo', OnboardingSoloSchema);

export default OnboardingSolo;
