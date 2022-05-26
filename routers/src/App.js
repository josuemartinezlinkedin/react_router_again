import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
        <Route path='/first' element={<div>first page</div>} />
        <Route path='/second' element={<div>second page</div>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
