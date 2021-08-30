import { Provider } from 'react-redux';
import store from '../redux/store';
// import { myAction } from '../redux/actions';
// console.log(store);
// console.log(store.getState);
// store.dispatch(myAction(5));
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  // const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
