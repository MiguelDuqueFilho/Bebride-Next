import Menu from '../Menu';
import AccessNotification from '../AccessNotification';

const LayoutSite: React.FC = ({ children }) => {
  return (
    <div>
      <AccessNotification />
      <Menu />
      {children}
    </div>
  );
};

export default LayoutSite;
