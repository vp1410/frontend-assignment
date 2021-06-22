import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { ModalProvider } from 'react-modal-hook';

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
