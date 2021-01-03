import React from 'react';
import { csrfToken, signIn } from 'next-auth/client';

const SignIn = ({ csrfToken }) => {
  return (
    <form method="post" action="/api/auth/callback/credentials">
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <label>
        Username
        <input name="username" type="text" />
      </label>
      <label>
        Password
        <input name="password" type="text" />
      </label>
      <button type="submit">Sign in</button>
    </form>
  );
};

export async function getInitalProps(context) {
  return {
    csrfToken: await csrfToken(context)
  };
}

export default signIn;
