import Menu from '../Menu';
import AccessNotification from '../AccessNotification';
import { MyContainer } from './styles';

const LayoutSite: React.FC = ({ children }) => {
  return (
    <MyContainer component="div">
      <AccessNotification />
      <Menu />
      {children}
    </MyContainer>
  );
};

export default LayoutSite;
