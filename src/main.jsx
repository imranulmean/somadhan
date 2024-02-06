import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { store, persistor } from './redux/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ThemeProvider from './components/ThemeProvider.jsx';
import { ReactKeycloakProvider } from '@react-keycloak/web'
import keycloak from './keycloak'


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <PersistGate persistor={persistor}>
//     <Provider store={store}>
//       <ThemeProvider>
//         <App />
//       </ThemeProvider>
//     </Provider>
//   </PersistGate>
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  // <ReactKeycloakProvider authClient={keycloak}>
        <App />
  //  {/* </ReactKeycloakProvider> */}
);