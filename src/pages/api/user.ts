import { NextApiRequest, NextApiResponse } from 'next';
import { getRepository } from 'typeorm';
import { User } from '../../database/entity/User';
import { initializeDatabase } from '../../database/initializers/database';

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const connection = await initializeDatabase();
  const userRepo = await getRepository(User);

  // const {
  //   query: { name }
  // } = req;

  // const {
  //   body: { name }
  // } = req;

  const users = await userRepo.find();
  await connection.close();
  return res.json({ users });
};
