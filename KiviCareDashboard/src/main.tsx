import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';

import { Provider } from 'react-redux';
import { store } from './store';
// scss
import "flatpickr/dist/flatpickr.css";
import "choices.js/public/assets/styles/choices.min.css";
import './assets/scss/kivicare.scss'
import './assets/scss/custom.scss'
import './assets/scss/customizer.scss'
import './assets/scss/rtl.scss'
import { AuthProvider } from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
