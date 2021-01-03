import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { NextApiHandler } from 'next';

import api from '../../../services/api';

const options = {
  site: process.env.NEXTAUTH_URL,
  providers: [
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    Providers.Twitter({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET
    }),
    Providers.Credentials({
      id: 'credentials',
      name: 'credentials',
      credentials: {},
      authorize: async credentials => {
        const data = {
          name: credentials.userName,
          email: credentials.userEmail,
          image: null,
          password: credentials.password,
          isNewUser: Boolean(credentials.isNewUser)
        };
        try {
          // const user = await login(data);

          if (data) {
            console.log(credentials);
            console.log(
              'Any object returned will be saved in `user` property of the JWT'
            );
            return Promise.resolve(data);
          } else {
            return Promise.resolve(null);
          }
        } catch (error) {
          if (error.response) {
            console.log(error.response);
            Promise.reject(new Error('Userid e/ou Senha Invalida.'));
          }
        }
      }
    })
  ],

  database: process.env.DATABASE_URL,

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    jwt: true,
    maxAge: 1 * 3 * 60 * 60, // 3 hours
    updateAge: 24 * 60 * 60 // 24 hours
  },

  jwt: {
    secret: process.env.JWT_SECRET,
    encryption: true
    // encode: async ({ secret, token, maxAge }) => {},
    // decode: async ({ secret, token, maxAge }) => {}
  },

  pages: {
    signIn: '/loginout'
    //signOut: '/api/auth/signout',
    //error: '/api/auth/error', // Error code passed in query string as ?error=
    //verifyRequest: '/api/auth/verify-request', // (used for check email message)
    //newUser: null // If set, new users will be directed here on first sign in
  },

  callbacks: {
    signIn: async (user: Object, account: Object, profile: Object) => {
      /**
       * @param  {object} user  User profile (e.g. user id, name, email)
       * {
       *  name: 'Miguel Duque Filho',
       *  email: 'miguel.duque@globo.com',
       *  image: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10218237314981287&height=50&width=50&ext=1612181976&hash=AeSniyrvFaDZClIqx84'
       * }
       * @param  {object} account  Account used to sign in (e.g. OAuth account)
       *    {
       *   provider: 'facebook',
       *   type: 'oauth',
       *   id: '10218237314981287',
       *  refreshToken: undefined,
       *  accessToken: 'EAAMB0ZAA3ZCZCoBACLZAsDhoFXV9Y7RepFgKFrxnb8HFdvs8nPoxX1ZBSfITXP7uSYYgGj1RO81ZBPYSQrLTzlrkZBkxG6mFRYt7FYaS9PYkLlXQHPU3q025aXDfvBcoZBbTMJjC9I1yd3xcWeadmPG8fs15eIa9nL0ZD',
       *  accessTokenExpires: null
       * }
       * @param  {object} profile Provider specific metadata (e.g. OAuth Profile)
       *    {
       *   email: 'miguel.duque@globo.com',
       *   name: 'Miguel Duque Filho',
       *   picture: {
       *     data: {
       *       height: 50,
       *       is_silhouette: false,
       *       url: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10218237314981287&height=50&width=50&ext=1612181976&hash=AeSniyrvFaDZClIqx84',
       *       width: 50
       *     }
       *   },
       *   id: '10218237314981287'
       * }
       * @return {boolean|object}  Return `true` (or a modified JWT) to allow sign in
       *                           Return `false` to deny access
       */
      console.log('==> callbacks signIn: async (user, account, profile)');
      const isAllowedToSignIn = true;

      console.log('===>>> user');
      console.log(user);
      console.log('===>>> account');
      console.log(account);
      console.log('===>>> profile');
      console.log(profile);
      if (isAllowedToSignIn) {
        console.log('<== callbacks signIn:  Promise.resolve(true)');
        return Promise.resolve(true);
      } else {
        console.log('<== callbacks signIn:  Promise.resolve(false)');
        return Promise.resolve(false);
      }
    },

    redirect: async (url: string, baseUrl: string) => {
      /**
       * @param  {string} url      URL provided as callback URL by the client
       * @param  {string} baseUrl  Default base URL of site (can be used as fallback)
       * @return {string}          URL the client will be redirect to
       */
      console.log(`<==> redirect: async (url=${url}, baseUrl=${baseUrl})`);

      return url.startsWith(baseUrl)
        ? Promise.resolve(url)
        : Promise.resolve(baseUrl);
    },

    session: async (session: Object, user: Object) => {
      /**
       * @param  {object} session  Session object
       * @param  {object} user     User profile (e.g. user id, name, email)
       * @return {object}          Session that will be returned to the client
       */
      console.log('==> Callbacks session: async (session, user)');
      console.log('===>>> session');
      console.log(session);
      console.log('===>>> user');
      console.log(user);
      console.log('<== Callbacks session : return Promise.resolve(session)');
      return Promise.resolve(session);
    },

    jwt: async (
      token: Object,
      user: Object,
      account: Object,
      profile: Object,
      isNewUser: Boolean = false
    ) => {
      /**
       * @param  {object} token    Decrypted JSON Web Token
       * {
       *   name: 'Miguel Duque Filho',
       *   email: 'miguel.duque@globo.com',
       *   picture: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10218237314981287&height=50&width=50&ext=1612181976&hash=AeSniyrvFaDZClIqx84'
       * }
       * @param  {object} user     Profile - only available on sign in
       * {
       *  name: 'Miguel Duque Filho',
       *  email: 'miguel.duque@globo.com',
       *  image: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10218237314981287&height=50&width=50&ext=1612181976&hash=AeSniyrvFaDZClIqx84'
       * }
       * @param  {object} account  Account used to sign in (e.g. OAuth account)
       * {
       *   provider: 'facebook',
       *   type: 'oauth',
       *   id: '10218237314981287',
       *   refreshToken: undefined,
       *   accessToken: 'EAAMB0ZAA3ZCZCoBACLZAsDhoFXV9Y7RepFgKFrxnb8HFdvs8nPoxX1ZBSfITXP7uSYYgGj1RO81ZBPYSQrLTzlrkZBkxG6mFRYt7FYaS9PYkLlXQHPU3q025aXDfvBcoZBbTMJjC9I1yd3xcWeadmPG8fs15eIa9nL0ZD',
       *   accessTokenExpires: null
       * }
       * @param  {object} profile  Provider specific metadata (e.g. OAuth Profile)
       * {
       *  email: 'miguel.duque@globo.com',
       *  name: 'Miguel Duque Filho',
       *  picture: {
       *    data: {
       *      height: 50,
       *      is_silhouette: false,
       *      url: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10218237314981287&height=50&width=50&ext=1612181976&hash=AeSniyrvFaDZClIqx84',
       *       width: 50
       *     }
       *   },
       *  id: '10218237314981287'
       * }
       * @param  {boolean} isNewUser True if new user (only available on sign in)
       * @return {object}          JSON Web Token that will be saved
       */
      console.log('==> jwt: async (token, user, account, profile, isNewUser)');
      console.log('===>>> token');
      console.log(token);
      console.log('===>>> user');
      console.log(user);
      console.log('===>>> account');
      console.log(account);
      console.log('===>>> profile');
      console.log(profile);
      console.log('===>>> isNewUser');
      console.log(isNewUser);

      const isSignIn = user ? true : false;
      if (isSignIn) {
        // token.user = user.username;
        // token.password = password;
      }

      console.log('<== jwt: return Promise.resolve(token)');
      return Promise.resolve(token);
    },

    events: {
      /* on successful sign in */
      // signIn: async message => {
      //   console.log(`<==> Events Signin ${message}`);
      // },
      /* on signout */
      // signOut: async message => {
      //   console.log(`<==> Events signOut ${message}`);
      // },
      /* user created */
      // createUser: async message => {
      //   console.log(`<==> Events createUser ${message}`);
      // },
      /* account linked to a user */
      // linkAccount: async message => {
      //   console.log(`<==> Events linkAccount ${message}`);
      // },
      /* session is active */
      // session: async message => {
      //   console.log(`<==> Events session ${message}`);
      // },
      /* error in authentication flow */
      // console.log(`<==> Events error ${message}`);
      // error: async message => {
      // }
    },

    debug: process.env.NODE_ENV === 'development'

    // true for HTTPS sites / false for HTTP sites
    // useSecureCookies: true,
  }
};

const Auth: NextApiHandler = (req, res) => {
  console.log('==> START [...nextauth] (req, res)');
  console.log(`===>>> req - method:${req.method} url:${req.url}`);
  console.log('===>>> req: query >>>>>>>>');
  console.log(req.query);
  console.log('===>>> req: body >>>>>>>>');
  console.log(req.body);
  console.log(`===>>> res - statusCode:${res.statusCode} url:${req.url}`);
  console.log('===>>> start NextAuth(req, res, options)');
  NextAuth(req, res, options);
  console.log('===>>> End NextAuth');
  console.log('<== END [...nextauth]');
};

export default Auth;

const login = async (data: any) => {
  const result = await api.post(data);
  console.log('<==> Login result', result);
  return result;
};
