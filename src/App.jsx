import { BrowserRouter as Roter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Header from './pages/Navbar';
import './pages/Home.css'
import Destination from './pages/Destination';
import Tours from './pages/Tours';
import ContactUs from './pages/ContactUs';
function App() {
  return (
    <>
      <Roter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/tours' element={<Tours />} />
          <Route path='/contact' element={<ContactUs />}/>
        </Routes>
      </Roter>
    </>
  );
}

export default App;
