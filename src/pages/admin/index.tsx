import LayoutAdmin from '../../components/LayoutAdmin';

function Admin({ children }) {
  return (
    <div>
      <LayoutAdmin title="Bebride - Administração">{children}</LayoutAdmin>
    </div>
  );
}

export default Admin;
