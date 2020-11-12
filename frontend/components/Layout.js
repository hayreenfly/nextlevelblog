import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FormContainer from '../components/FormContainer';
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <title>NEXTLEVEL CODE BLOG</title>
      </Head>
      <Header />
      <main>
        <FormContainer>{children}</FormContainer>
      </main>

      <Footer />
    </>
  );
};

export default Layout;
