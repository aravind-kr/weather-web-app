import { getAllHistory, createWeatherHistory } from '../../lib/db';

export default async (req, res) => {
  try {
    const { historyId } = req.query;
    if (req.method === 'GET') {
      const history = await getAllHistory();

      res.status(200).json({ data: history });
    } else if (req.method === 'POST') {
      const { location } = req.body;

      if (location) {
        const doc = await createWeatherHistory(req.body);
        res.status(200).json({ data: { id: doc.id } });
      } else {
        res.status(200).json({ status: false });
      }
    } else {
      res.status(200).json({ status: false });
    }
  } catch (error) {
    console.error(error.message);

    res.status(500).json({ error });
  }
};
