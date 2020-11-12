import { Provider } from 'react-redux';
import store from '../store';

import '../bootstrap.min.css';
import '../styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
