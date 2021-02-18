import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

prisma.$use(async (params, next) => {
  if (params.model === 'User' && params.action === 'create') {
    const password = params.args.data.password;
    params.args.data.password = await bcrypt.hash(password, 10);
  }
  return next(params);
});

async function main() {
  const miguel = await prisma.user.create({
    data: {
      email: 'miguel.duque@globo.com',
      name: 'Miguel Duque Filho',
      password: '123123123',
      role: 'Admin'
    }
  });
  console.log({ miguel });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
