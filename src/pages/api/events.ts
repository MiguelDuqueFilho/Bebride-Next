import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import upload from '../../utils/upload';

const handler = nc()
  .use(upload.single('file'))
  // .get((req: NextApiRequest, res: NextApiResponse) => {
  //   res.send('Hello world');
  // })
  .post((req: NextApiRequest, res: NextApiResponse) => {
    const {} = req.body;
    res.json({ hello: 'world' });
  })

  .patch(async (req, res) => {
    throw new Error('Throws me around! Error can be caught and handled.');
  });

export default handler;
