import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import GlobalStyles from './styles/globalStyles';
import Routes from './routes';
import Header from './components/Header';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer autoClose={3000} />
        <Header />
        <GlobalStyles />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
