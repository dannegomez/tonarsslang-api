import { NextApiRequest, NextApiResponse } from 'next';
import slangData from '../../../data/slang.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { lang, limit, page, region } = req.query;
    let data = slangData;
    const defaultLimit = 5;

    console.log(limit, page);

    if (limit && page) {
      const start = +page * +limit;
      const stop = +start + +limit;
      data = data.slice(start, stop);
    }
    else if (page) {
      let pageSize = +page;
      if (pageSize > 0) pageSize--;

      const start = pageSize * defaultLimit;
      const stop = start + defaultLimit;
      data = data.slice(start, stop);
    }
    else if (limit) {
      data = data.slice(0, +limit || defaultLimit);
    }

    if (lang) {
      data = data.filter(entry => entry.language === lang);
    }

    if (region) {
      data = data.filter(entry => entry.region === region);
    }

    res.status(200).json(data);
  } else if (req.method === 'POST') {
    res.status(501).json({ message: 'POST-funktionalitet inte implementerad än.' });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
