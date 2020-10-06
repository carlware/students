import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { configureStore } from './Store';
import Root from './Containers/root';

const store = configureStore();

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Root />
        </Router>
      </Provider>
    </React.StrictMode>
  )
}

export default App
