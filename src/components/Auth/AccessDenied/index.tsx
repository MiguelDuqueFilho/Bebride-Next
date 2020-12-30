import { signIn, signOut } from 'next-auth/client';
import { Container, ContainerButton, ButtonLogin } from './styles';

function AccessDenied() {
  function HandleLogin() {
    signIn('credentials', {
      csrfToken:
        '93bc496b8d2314614dc61a8442cbaa3c38d99943afb494d83226dcba26f99732',
      username: 'Miguel Duque FIlho',
      account: 'miguel.duque@globo.com',
      password: '333444555666'
    });
  }
  function HandleLogoff() {
    signOut();
  }
  return (
    <Container>
      <h1>Acesso Negado</h1>
      <ContainerButton>
        <ButtonLogin type="button" onClick={HandleLogin}>
          Vá para Login
        </ButtonLogin>
        <ButtonLogin type="button" onClick={HandleLogoff}>
          Logoff
        </ButtonLogin>
      </ContainerButton>
    </Container>
  );
}

export default AccessDenied;
