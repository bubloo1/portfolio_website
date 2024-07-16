import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import { disableReactDevTools } from '@fvilers/disable-react-devtools'


if(process.env.NODE_DEV === 'production') disableReactDevTools()

ReactDOM.createRoot(document.getElementById('root')!).render(

    <BrowserRouter>
      <App />
    </BrowserRouter>
)
