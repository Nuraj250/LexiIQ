import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';  // optional for customization
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<React.StrictMode><App /></React.StrictMode>);
