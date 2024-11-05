import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { UsuarioProvider } from './context/UsuarioContext'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <UsuarioProvider>
    <App />
  </UsuarioProvider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
