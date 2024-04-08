
import OnboardingAntho from '../models/anthoModel.js';


export const createOnboardingAntho = async (req, res) => {
  try {
    const { name, email, phone, packagee } = req.body;

    console.log(req.body)

     // Validate request data
     if (!name || !email || !phone || !packagee) {
        return res.status(400).json({ error: 'All fields are required' });
      }
  
     // Proceed with saving data to database
     const newOnboardingAntho = new OnboardingAntho({
        name,
        email,
        phone,
        packagee,
      });
  
      await newOnboardingAntho.save();
    res.status(201).json({success:true, message: 'Data saved successfully!' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message });
  }
};



export const getOnboardingAnthos = async (req, res) => {
  try {
    const onboardingAnthos = await OnboardingAntho.find();
    res.status(200).json(onboardingAnthos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



