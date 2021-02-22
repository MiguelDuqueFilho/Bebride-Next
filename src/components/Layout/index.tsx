import { MyContainer } from './styles';
import Menu from '../Menu';
import AccessNotification from '../AccessNotification';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <AccessNotification />
      <Menu />
      {children}
    </div>
  );
};

export default Layout;
