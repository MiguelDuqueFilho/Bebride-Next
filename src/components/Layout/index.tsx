// import { useSession } from 'next-auth/client';
import { Container } from '../../styles/pages/home';
import Menu from '../Menu';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Menu />
      {children}
    </div>
  );
};

export default Layout;
