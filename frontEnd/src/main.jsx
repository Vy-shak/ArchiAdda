
import { createRoot } from 'react-dom/client'
import './index.css'
import Landing from './pages/Landing';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing />} />
    </Routes>
  </BrowserRouter>
)
