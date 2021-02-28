import { deleteWeatherHistory } from '../../../lib/db';

export default async (req, res) => {
  try {
    const { historyId } = req.query;
    if (req.method === 'DELETE') {
      const status = await deleteWeatherHistory(historyId);

      res.status(200).json({ data: status });
    } else {
      res.status(200).json({ status: false });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error });
  }
};
