import { useSession } from 'next-auth/client';
import { Container, ContainerContent } from './styles';

const AccessDenied: React.FC = () => {
  const [session, loading] = useSession();

  return (
    <Container>
      <ContainerContent>
        {session && <h1>Login efetuado!!</h1>}
        {!session && <h1>Acesso negado!!</h1>}
      </ContainerContent>
    </Container>
  );
};

export default AccessDenied;
