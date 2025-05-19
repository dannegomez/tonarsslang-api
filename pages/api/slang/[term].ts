import { NextApiRequest, NextApiResponse } from 'next';
import slangData from '../../../data/slang.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { term } = req.query;
  const entry = slangData.find(s => s.term.toLowerCase() === String(term).toLowerCase());

  if (entry) {
    res.status(200).json(entry);
  } else {
    res.status(404).json({ message: 'Slangordet hittades inte.' });
  }
}
