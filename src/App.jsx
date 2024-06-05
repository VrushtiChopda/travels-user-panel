import { BrowserRouter as Roter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Navbar';
import '../src/components/Home.css'
function App() {
  return (
    <>
      <Roter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </Roter>
    </>
  );
}

export default App;
