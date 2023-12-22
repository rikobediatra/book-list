import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/index.css'
import {Provider} from './context/books.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider>
    <App />
  </Provider>,
)
