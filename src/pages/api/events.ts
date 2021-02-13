import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { PrismaClient } from '@prisma/client';
import upload from '../../utils/upload';

interface ExtendNextApiRequest extends NextApiRequest {
  body: {
    title: string;
    content: string;
    initialDate: string;
    eventDate: string;
    finishDate: string;
  };
  file: {
    originalname: string;
    key: string;
    location: string;
  };
}

const handler = nextConnect<NextApiRequest, NextApiResponse>()
  .use(upload.single('file'))
  .post(async (req: ExtendNextApiRequest, res: NextApiResponse) => {
    const {
      title,
      content,
      initialDate = null,
      eventDate = null,
      finishDate = null
    } = req.body;

    const { originalname = '', key = '', location = '' } = req.file;
    try {
      const prisma = new PrismaClient({
        errorFormat: 'minimal'
      });

      const data = await prisma.event.create({
        data: {
          title,
          content,
          initialDate: new Date(initialDate),
          eventDate: new Date(eventDate),
          finishDate: new Date(finishDate),
          fileKey: key,
          fileLocation: location,
          fileOriginalName: originalname
        }
      });

      return res.status(201).json({ event: data });
    } catch (error) {
      return res.status(400).json({ Error: { message: error.message } });
    }
  })

  .patch(async (req, res) => {
    throw new Error(
      'Não acredito que aconteceu! O erro pode ser detectado e tratado.'
    );
  });

export const config = {
  api: {
    bodyParser: false
  }
};

export default handler;
