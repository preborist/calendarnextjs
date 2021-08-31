import { Provider } from 'react-redux';
import store from '../redux/store';

import '../styles/normalize.scss';
import '../styles/globals.scss';
import '../styles/base.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
