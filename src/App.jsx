import { BrowserRouter as Roter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Header from './pages/Navbar';
import './pages/Home.css'
import Destination from './pages/Destination';
function App() {
  return (
    <>
      <Roter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/destination' element={<Destination />}></Route>
        </Routes>
      </Roter>
    </>
  );
}

export default App;
