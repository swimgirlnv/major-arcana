import axios from 'axios';

const OPENAI_API_KEY = 'your-openai-api-key';
const OPENAI_API_URL = 'https://api.openai.com/v1/completions';

export const getOpenAICompletion = async (prompt: string, model: string = "text-davinci-003") => {
  try {
    const response = await axios.post(
      OPENAI_API_URL,
      {
        model,
        prompt,
        max_tokens: 100, // Customize this as needed
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );
    return response.data.choices[0].text;
  } catch (error) {
    console.error("Error fetching OpenAI completion:", error);
    throw error;
  }
};