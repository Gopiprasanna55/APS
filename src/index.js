import React from 'react';
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
import { AppProvider } from './context'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const customToastStyle = {
    width:"400px",
  };
createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <AppProvider>
        <App />
        <ToastContainer position='top-center' toastStyle={customToastStyle}/>
    </AppProvider>
    </React.StrictMode>
)
