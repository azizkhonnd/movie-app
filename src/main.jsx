import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import store from './redux/store/store.js'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './lang/i18n.js';
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>
  </BrowserRouter>
)
