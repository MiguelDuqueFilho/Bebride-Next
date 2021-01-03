import React from 'react';
import { providers, signIn } from 'next-auth/client';

export default ({ providers }) => {
  return (
    <>
      {Object.values(providers).map(provider => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
};

export async function getInitalProps(context) {
  return {
    providers: await providers(context)
  };
}

// Use o retorno de chamada de login para controlar se um usuário tem permissão para fazer login ou não.

// Isso é acionado antes da conclusão do fluxo de login, portanto, o perfil do usuário pode ser um objeto de usuário (com um ID) ou pode ser apenas seu nome e endereço de e-mail, dependendo do fluxo de login e se eles já tiverem uma conta.

// Ao usar o login por e-mail, esse método é acionado quando o usuário solicita o login e novamente quando ativa o link no e-mail de login.
// callbacks: {
//   /**
//    * @param  {object} profile  User profile (e.g. user id, name, email)
//    * @param  {object} account  Account used to sign in (e.g. OAuth account)
//    * @param  {object} metadata Provider specific metadata (e.g. OAuth Profile)
//    * @return {boolean|object}  Return `true` (or a modified JWT) to allow sign in
//    *                           Return `false` to deny access
//    */
//   signIn: async (profile, account, metadata) => {
//     const isAllowedToSignIn = true;
//     if (isAllowedToSignIn) {
//       return Promise.resolve(true);
//     } else {
//       return Promise.resolve(false);
//     }
//   };
// }
