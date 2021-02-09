// import { useSession } from 'next-auth/client';
import { Container } from '../../styles/pages/home';
import Menu from '../Menu';

const Layout: React.FC = ({ children }) => {
  // const [session, loading] = useSession();

  return (
    <Container>
      <Menu />
      {children}
    </Container>
  );
};

export default Layout;
