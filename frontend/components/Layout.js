import Header from '../components/Header';
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <p>Footer</p>
    </>
  );
};

export default Layout;
