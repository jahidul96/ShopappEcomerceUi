
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Details from './pages/Details';
import Navbar from './components/Navbar'
import PreNav from './components/PreNav'

import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div>
        <PreNav />
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/productdetails" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
