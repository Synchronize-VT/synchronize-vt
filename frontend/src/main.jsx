import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App.jsx';
import './index.css';
import { WebSocketProvider } from './contexts/WebSocketContext';
import { UserProvider } from './UserContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
