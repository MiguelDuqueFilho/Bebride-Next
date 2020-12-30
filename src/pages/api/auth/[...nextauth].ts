import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { Url } from 'url';

type UserCredentials = {
  username?: string;
  account: string;
  password: string;
  csrfToken: string;
  callbackUrl?: string;
  isNewUser: boolean;
  json: string;
};

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
const options = {
  // https://next-auth.js.org/configuration/providers
  providers: [
    Providers.Email({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
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
      // The name to display on the sign in form (e.g. 'Sign in with...')
      id: 'credentials',
      name: 'credentials',
      credentials: {},
      authorize: async credentials => {
        const user = {
          username: credentials.username,
          account: credentials.account,
          password: credentials.password,
          isNewUser: Boolean(credentials.isNewUser)
        };

        if (user) {
          console.log(credentials);
          // Any object returned will be saved in `user` property of the JWT
          console.log(
            'Any object returned will be saved in `user` property of the JWT'
          );
          return Promise.resolve(user);
        } else {
          // If you return null or false then the credentials will be rejected
          return Promise.resolve(null);
          // You can also Reject this callback with an Error or with a URL:
          // return Promise.reject(new Error('error message')) // Redirect to error page
          // return Promise.reject('/path/to/redirect')        // Redirect to a URL
        }
      }
    })
  ],
  // Database optional. MySQL, Maria DB, Postgres and MongoDB are supported.
  // https://next-auth.js.org/configuration/database
  //
  // Notes:
  // * You must to install an appropriate node_module for your database
  // * The Email provider requires a database (OAuth providers do not)
  // database: process.env.DATABASE_URL,
  database: null,

  // The secret should be set to a reasonably long random string.
  // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
  // a seperate secret is defined explicitly for encrypting the JWT.
  secret: process.env.NEXTAUTH_SECRET,

  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `jwt` is automatically set to `true` if no database is specified.
    jwt: true,

    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 1 * 3 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    updateAge: 24 * 60 * 60 // 24 hours
  },

  // JSON Web tokens are only used for sessions if the `jwt: true` session
  // option is set - or by default if no database is specified.
  // https://next-auth.js.org/configuration/options#jwt
  jwt: {
    // A secret to use for key generation (you should set this explicitly)
    // secret: process.env.NEXT_PUBLIC_JWT_SECRET
    // Set to true to use encryption (default: false)
    // encryption: true,
    // You can define your own encode/decode functions for signing and encryption
    // if you want to override the default behaviour.
    // encode: async ({ secret, token, maxAge }) => {},
    // decode: async ({ secret, token, maxAge }) => {},
    secret: process.env.NEXTAUTH_SECRET,
    encryption: true // Ve
  },

  // You can define custom pages to override the built-in pages.
  // The routes shown here are the default URLs that will be used when a custom
  // pages is not specified for that route.
  // https://next-auth.js.org/configuration/pages
  pages: {
    // signIn: '/api/auth/signin', // Displays signin buttons
    // signOut: '/api/auth/signout', // Displays form with sign out button
    // error: '/api/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/api/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },

  // Callbacks are asynchronous functions you can use to control what happens
  // when an action is performed.
  // https://next-auth.js.org/configuration/callbacks
  callbacks: {
    signIn: async (username: string, account: String, profile: String) => {
      console.log('signIn');
      console.log(username);
      console.log(account);
      console.log(profile);
      return Promise.resolve(true);
    },
    redirect: async (url: Url, baseUrl: Url) => {
      console.log('redirect');
      console.log(url);
      console.log(baseUrl);
      return Promise.resolve(baseUrl);
    },
    session: async (session: any, username: string, account: String) => {
      console.log('session');
      console.log(session);
      console.log(username);
      console.log(account);
      return Promise.resolve(session);
    },
    jwt: async (
      token,
      username: string,
      account: String,
      password: String,
      profile: String,
      isNewUser: boolean
    ) => {
      console.log('jwt');
      console.log('token');

      console.log('username');
      console.log(username);
      console.log('account');
      console.log(account);
      console.log('password');
      console.log(password);
      console.log('profile');
      console.log(profile);
      console.log('isNewUser');
      console.log(isNewUser);

      const isSignIn = account ? true : false;
      if (isSignIn) {
        token.account = username;
        token.password = password;
      }
      return Promise.resolve(token);
    },

    // Events are useful for logging
    // https://next-auth.js.org/configuration/events
    events: {},

    // Enable debug messages in the console if you are having problems
    debug: false
  }
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  // console.log('req: NextApiRequest');
  // console.log(req);
  // console.log('res: NextApiResponse');
  // console.log(res);
  console.log('chamando NextAuth');
  NextAuth(req, res, options);
};
