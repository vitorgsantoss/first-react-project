import { GlobalStyle } from './styles/GlobalStyles';
import Header from './components/Header';
import MyRoutes from './routes';
import { Router } from 'react-router-dom/cjs/react-router-dom.min';
import history from './services/history';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <MyRoutes />
        <GlobalStyle />
        <ToastContainer
          autoClose={3000}
          className="toast-container"
          progressClassName="my-custom-progress"
        />
      </Router>
    </Provider>
  );
}

export default App;
