import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

//importar FontAwesome
import 'https://kit.fontawesome.com/072e5df971.js'

// components
//import Home from './components/Home';
import SecondsCounter from './components/SecondsCounter';
import SecondsCounter2 from './components/SecondsCounter2';
import SecondsCounter3 from './components/SecondsCounter3';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SecondsCounter seconds={3434} />
    <SecondsCounter2 seconds={50} />
    <SecondsCounter3 />
  </React.StrictMode>,
)
