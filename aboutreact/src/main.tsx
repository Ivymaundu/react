import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './pages/App.tsx';
import { Provider } from 'react-redux';
import Store from './store/index.ts';
// import './pages/layout.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        
          <App />
      
      </BrowserRouter>
    </Provider>
    
  </React.StrictMode>,
)
