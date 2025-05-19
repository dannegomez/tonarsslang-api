import { NextApiRequest, NextApiResponse } from 'next';
import slangData from '../../../data/slang.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const randomIndex = Math.floor(Math.random() * slangData.length);
  const randomWord = slangData[randomIndex];
  res.status(200).json(randomWord);
}
