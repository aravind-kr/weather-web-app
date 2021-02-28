import { getWeather } from '../../lib/weather';

export default async (req, res) => {
  try {
    const { query } = req.query;
    if (req.method === 'GET' && query) {
      const weather = await getWeather(query);
      res.status(200).json({ data: weather });
    } else {
      res.status(200).json({ status: false });
    }
  } catch (error) {
    console.error(error.message);

    res.status(500).json({ error });
  }
};
