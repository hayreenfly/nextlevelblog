import Layout from '../../components/Layout';
import Link from 'next/link';
import Private from '../../components/auth/Private';
import Admin from '../../components/auth/Admin';

const AdminIndex = () => {
  return (
    <Layout>
      <Private>
        <Admin>
          <h2>Admin Dashboard</h2>
        </Admin>
      </Private>
    </Layout>
  );
};

export default AdminIndex;
