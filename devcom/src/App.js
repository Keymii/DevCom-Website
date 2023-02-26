import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 

import Landing from './components/landing/landing';
import Footer from './components/Footer/Footer';
import AboutPage from './components/AboutPage/AboutPage';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
  <>
  <NavBar/>
    <Router>
      <Routes>
        <Route exact path = "/" element={<Landing/>}/>
        <Route exact path = "/footer" element={<Footer/>}/>
        <Route exact path='/about' element={<AboutPage/>}/>
      </Routes>
    </Router> 
  <Footer/>
  </>
  );
}

export default App;
