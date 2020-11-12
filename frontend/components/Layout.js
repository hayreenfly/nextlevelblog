import Header from '../components/Header';
import Footer from '../components/Footer';
import FormContainer from '../components/FormContainer';
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <FormContainer>{children}</FormContainer>
      </main>

      <Footer />
    </>
  );
};

export default Layout;
