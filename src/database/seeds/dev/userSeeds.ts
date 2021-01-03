// import Chance from 'chance';
import { ALLOWED_ROLES } from '../entity/User';

// const chance = new Chance();

export const seed = async (): Promise<any> => {
  const users = [];

  const admin = {
    // email: chance.email({ domain: 'adminTest.com' }),
    role: ALLOWED_ROLES.ADMIN
    // firstName: chance.first(),
    // lastName: chance.last(),
    // phone: chance.phone()
  };

  const speaker = {
    // email: chance.email({ domain: 'speakerTest.com' }),
    role: ALLOWED_ROLES.SPEAKER,
    firstName: chance.first(),
    lastName: chance.last(),
    phone: chance.phone()
  };

  const editor = {
    // email: chance.email({ domain: 'editorTest.com' }),
    role: ALLOWED_ROLES.EDITOR
    // firstName: chance.first(),
    // lastName: chance.last(),
    // phone: chance.phone()
  };

  const viewer = {
    // email: chance.email({ domain: 'speakerTest.com' }),
    role: ALLOWED_ROLES.VIEWER
    // firstName: chance.first(),
    // lastName: chance.last(),
    // phone: chance.phone()
  };

  users.push(admin, speaker, editor, viewer);

  try {
    console.log('Seeding dummy user data...');
    // const usersPromises = users.map(user => UserFactory.create(user));

    console.log(usersPromises);

    // const userResults = await Promise.all(usersPromises);
    console.log('Done seeding users.');

    // return userResults;
    return users;
  } catch (e) {
    console.error('ERROR - Users: ', e);
  }
};
