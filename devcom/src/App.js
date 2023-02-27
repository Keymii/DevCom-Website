import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 

import Landing from './components/landing/landing';
import Footer from './components/Footer/Footer';
import "./fonts/Lato/Lato-Regular.ttf";
import "./fonts/Lato/Lato-Black.ttf";
import AboutPage from './components/AboutPage/AboutPage';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import Projects from './components/Projects/Projects';
import Gallery from './components/Gallery/Gallery';
import Team from './components/Team/Team';

function App() {
  return (
  <div>
  
  <div class="body">
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path = "/" element={<Landing/>}/>
        <Route exact path = "/home" element={<HomePage/>}/>
        <Route exact path = "/footer" element={<Footer/>}/>
        <Route exact path='/about' element={<AboutPage/>}/>
        <Route exact path='/projects' element={<Projects/>}/>
        <Route exact path='/team' element={<Team/>}/>
        <Route exact path='/gallery' element={<Gallery/>}/>

      </Routes>
    </Router> 
  <Footer/>
  </div>
  </div>
  );
}

export default App;
