import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 

import Landing from './components/landing/landing';
import Footer from './components/Footer/Footer';
import "./fonts/Lato/Lato-Regular.ttf";
import "./fonts/Lato/Lato-Black.ttf";
import AboutPage from './components/AboutPage/AboutPage';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
  <div>
  <NavBar/>
  <div class="body">
    <Router>
      <Routes>
        <Route exact path = "/" element={<Landing/>}/>
        <Route exact path = "/home" element={<HomePage/>}/>
        <Route exact path = "/footer" element={<Footer/>}/>
        <Route exact path='/about' element={<AboutPage/>}/>
      </Routes>
    </Router> 
  <Footer/>
  </div>
  </div>
  );
}

export default App;
