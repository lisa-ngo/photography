import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import Golden from './pages/Golden';
import MapView from './pages/MapView';

import Navbar from './components/Navbar'
import Footer from './components/Footer'

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
  },
});

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/goldensundown" element={<Golden />}/>
          <Route path="/mapview" element={<MapView />}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
      </div>
    </ThemeProvider>
    </>
  );
}

export default App;
