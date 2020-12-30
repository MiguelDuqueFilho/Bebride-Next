import { getSession, signOut } from 'next-auth/client';
import AccessDenied from '../../components/Auth/AccessDenied';

import {
  Container,
  ContainerText,
  Title,
  PanelContent,
  BtnTransparent,
  Button
} from './styles';

function PageSample({ content, session }) {
  function HandleLogoff() {
    signOut();
  }

  if (!session) {
    return <AccessDenied />;
  }

  return (
    <Container>
      <ContainerText>
        <Title className="title">
          Page Sample Signed in as {session.user.name || session.user.email}
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
        <Button
          type="button"
          className="btn transparent"
          value="Logoff"
          onClick={HandleLogoff}
        />
      </PanelContent>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  let content = null;

  if (session) {
    const hostname = process.env.NEXTAUTH_URL || 'http://localhost:3000';
    const options = { headers: { cookie: context.req.headers.cookie } };
    const res = await fetch(`${hostname}/api/examples/protected`, options);
    const json = await res.json();
    if (json.content) {
      content = json.content;
    }
  }

  return {
    props: {
      session,
      content
    }
  };
}

export default PageSample;
