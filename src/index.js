import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './root/App.js';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import  "./index.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);


