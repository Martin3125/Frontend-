// src/api.js
import axios from 'axios';

export const generateCourseContent = async (prompt, retryCount = 0) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: "gpt-3.5-turbo-instruct",
        prompt: prompt,
        max_tokens: 1500,
        temperature: 0.7,
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.log('API Key:', process.env.REACT_APP_OPENAI_API_KEY);
  }
};





