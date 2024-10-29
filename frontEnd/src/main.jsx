
import { createRoot } from 'react-dom/client'
import './index.css'
import { Landing, Signup } from './pages/export.js';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  </BrowserRouter>
)
