import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './baseStyles/theme';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import GlobalStyle from './baseStyles/GlobalStyles';

import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App title="Phonebook" />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
