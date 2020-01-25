import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/globalStyles';
import Routes from './routes';
import Header from './components';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <GlobalStyles />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
