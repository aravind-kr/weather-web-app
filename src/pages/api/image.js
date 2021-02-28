import { getUnsplashImage } from '../../lib/image';

export default async (req, res) => {
  try {
    const { query } = req.query;
    if (req.method === 'GET') {
      const images = await getUnsplashImage(query);
      res.status(200).json({ data: images });
    } else {
      res.status(200).json({ status: false });
    }
  } catch (error) {
    console.error(error.message);

    res.status(500).json({ error });
  }
};
