import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App.jsx';
import './index.css';
import { WebSocketProvider } from './contexts/WebSocketContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WebSocketProvider>
      <App />
    </WebSocketProvider>
  </React.StrictMode>,
);
