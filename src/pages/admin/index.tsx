import { getSession } from 'next-auth/client';

import {
  Container,
  Glass,
  Circle1,
  Circle2,
  Dashboard,
  Games,
  User,
  Links,
  Item,
  Pro,
  Imageiguals,
  P,
  H1,
  H2,
  H3,
  Status,
  Card,
  Progress,
  CardInfo
} from './styles';

import avatar from '../../assets/images/avatar.png';
import twitch from '../../assets/images/twitch.png';
import stream from '../../assets/images/steam.png';
import upcoming from '../../assets/images/upcoming.png';
import library from '../../assets/images/library.png';
import controller from '../../assets/images/controller.png';
import assassins from '../../assets/images/assassins.png';
import sackboy from '../../assets/images/sackboy.png';
import spiderman from '../../assets/images/spiderman.png';

export default function Admin({ user }) {
  return (
    <Container>
      <Glass className="glass">
        <Dashboard className="dashboard">
          <User className="user">
            <Imageiguals src={avatar} alt="user" />

            <H3>Simo Edwin</H3>
            <P>Pro Member</P>
          </User>
          <Links className="links">
            <Item className="link">
              <Imageiguals src={twitch} alt="twitch" />
              <H2>Streams</H2>
            </Item>
            <Item className="link">
              <Imageiguals src={stream} alt="steam" />
              <H2>Games</H2>
            </Item>
            <Item className="link">
              <Imageiguals src={upcoming} alt="upcoming" />
              <H2>New</H2>
            </Item>
            <Item className="link">
              <Imageiguals src={library} alt="library" />
              <H2>Library</H2>
            </Item>
          </Links>
          <Pro className="pro">
            <H2>Join pro for free games.</H2>
            <Imageiguals src={controller} alt="controller" />
          </Pro>
        </Dashboard>
        <Games className="games">
          <Status className="status">
            <H1>Active Games</H1>
            <input type="text" />
          </Status>
          <div className="cards">
            <Card className="card">
              <Imageiguals src={assassins} alt="assassins" />
              <CardInfo className="card-info">
                <H2>Assassins Creed Valhalla</H2>
                <P>PS5 Version</P>
                <Progress className="progress"></Progress>
              </CardInfo>
              <H2 className="percentage">60%</H2>
            </Card>
            <Card className="card">
              <Imageiguals src={sackboy} alt="sackboy" />
              <CardInfo className="card-info">
                <H2>Sackboy A Great Advanture</H2>
                <P>PS5 Version</P>
                <Progress className="progress"></Progress>
              </CardInfo>
              <H2 className="percentage">60%</H2>
            </Card>
            <Card className="card">
              <Imageiguals src={spiderman} alt="spiderman" />
              <CardInfo className="card-info">
                <H2>Spiderman Miles morales</H2>
                <P>PS5 Version</P>
                <Progress className="progress"></Progress>
              </CardInfo>
              <H2 className="percentage">60%</H2>
            </Card>
          </div>
        </Games>
      </Glass>
      <Circle1 className="circle1"></Circle1>
      <Circle2 className="circle2"></Circle2>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    context.res.writeHead(302, { Location: '/' });
    context.res.end();
    return {};
  }
  return {
    props: {
      user: session.user
    }
  };
}
