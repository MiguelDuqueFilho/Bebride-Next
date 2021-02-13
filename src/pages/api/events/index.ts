import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { PrismaClient } from '@prisma/client';
import uploadS3 from '../../../utils/uploadS3';

interface ExtendNextApiRequest extends NextApiRequest {
  body: {
    title: string;
    content: string;
    initialDate: string;
    eventDate: string;
    finishDate: string;
  };
  file?: {
    originalname: string;
    key: string;
    location: string;
  };
}

const handler = nextConnect<NextApiRequest, NextApiResponse>()
  .use(uploadS3.single('file'))
  .post(async (req: ExtendNextApiRequest, res: NextApiResponse) => {
    const {
      title,
      content,
      initialDate = null,
      eventDate = null,
      finishDate = null
    } = req.body;

    try {
      const prisma = new PrismaClient({
        errorFormat: 'minimal'
      });

      const createEvent = await prisma.event.create({
        data: {
          title,
          content,
          initialDate: new Date(initialDate),
          eventDate: new Date(eventDate),
          finishDate: new Date(finishDate),
          fileKey: req.file?.key,
          fileLocation: req.file?.location,
          fileOriginalName: req.file?.originalname
        }
      });

      const data = {
        title: createEvent.title,
        content: createEvent.content,
        image: createEvent.fileLocation,
        initialDate: createEvent.initialDate,
        eventDate: createEvent.eventDate,
        finishDate: createEvent.finishDate
      };

      return res.status(201).json({ event: data, message: 'Evento criado!' });
    } catch (error) {
      return res.status(400).json({ message: { error: error.message } });
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
