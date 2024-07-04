import OpenAI from 'openai';
import openaiSecret from '../openai.secret.json';

const openai = new OpenAI({
  apiKey: openaiSecret.key,
  /**
   * ! DO NOT DO THIS
   * This works much better in a server API, but for the love of testing and having fun,
   * we're good for 1 day :)
   */
  dangerouslyAllowBrowser: true,
});

const generateIcecreamImage = async (prompt: string) => {
  try {
    const response = await openai.images.generate({
      prompt,
      size: '512x512',
      n: 1,
    });

    return response.data[0].url;
  } catch (error: any) {
    console.error('Error generating image:', error.response ? error.response.data : error.message);
  }
};

export { generateIcecreamImage };
