import { signOut, useSession, getSession } from 'next-auth/client';
import AccessDenied from '../../components/AccessDenied';

import {
  Container,
  ContainerText,
  Title,
  PanelContent,
  BtnTransparent,
  Button
} from './styles';

export default function Admin({ session }) {
  if (!session) {
    return <AccessDenied />;
  }

  return (
    <Container>
      <ContainerText>
        <Title className="title">
          Page Sample Signed in as {session.user.name}
        </Title>
        <Title className="title">
          Page Sample Signed in as {session.user.email}
        </Title>
      </ContainerText>
      <PanelContent className={`content`}>
        <h3>Novo aqui?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <h4>
          Quod, in non. Molestias optio, quod mollitia ratione facere quibusdam
          necessitatibus quo officia iste blanditiis.{' '}
        </h4>
        <BtnTransparent
          type="button"
          className="btn transparent"
          value="transparente"
        />
      </PanelContent>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session
    }
  };
}
