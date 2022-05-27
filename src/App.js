import './App.css';
// import goldendesktop from './data/goldendesktop.js';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import Golden from './pages/Golden';
import Sundown from './pages/Sundown';

import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <div className="App">
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/goldensundown" element={<Golden />}/>
      </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
