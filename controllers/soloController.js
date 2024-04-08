
import OnboardingSolo from '../models/soloModel.js';

export const createOnboardingSolo = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      packagee,
      language,
      genre,
      manuscriptStatus,
    } = req.body;
    const file = req.file; // Assuming file is sent as multipart form-data

    if (!file) {
      return res.status(400).json({ error: 'File not uploaded' });
    }

    const newOnboardingSolo = new OnboardingSolo({
      name,
      email,
      phone,
      packagee,
      language,
      genre,
      manuscriptStatus,
      file: {
        data: file.buffer, // Convert file to Buffer
        contentType: file.mimetype, // Store file content type
      },
    });

    await newOnboardingSolo.save();
    res.status(201).json({ message: 'Data saved successfully!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



export const getOnboardingSolos = async (req, res) => {
  try {
    const onboardingSolos = await OnboardingSolo.find();
    res.status(200).json(onboardingSolos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



