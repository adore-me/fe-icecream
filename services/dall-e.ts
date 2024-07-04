import axios from 'axios';
import openaiSecret from '../openai.secret.json';

const apiKey = openaiSecret.key;

const generateIcecreamImage = async (prompt: string) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/images/generations',
      {
        prompt,
        n: 1,
        size: '512x512',
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.data[0].url;
  } catch (error: any) {
    console.error('Error generating image:', error.response ? error.response.data : error.message);
  }
};

export { generateIcecreamImage };
