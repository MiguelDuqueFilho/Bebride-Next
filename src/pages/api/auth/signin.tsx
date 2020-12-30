import { providers, signIn } from 'next-auth/client';
import { getStaticProps } from '../../index';
import { GetStaticProps, GetStaticPropsContext } from 'next';

export default function SignIn({ providers: GetProvidersResponse }) {
  return (
    <>
      {Object.values(providers).map(provider => (
        <div key={provider}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
}

SignIn.getStaticProps = async context => {
  return {
    providers: await providers(context)
  };
};
