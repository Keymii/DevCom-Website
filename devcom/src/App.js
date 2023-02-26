import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 

import Landing from './components/landing/landing';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
  <Router>
    <Routes>
      <Route exact path = "/" element={<Landing/>}/>
      <Route exact path = "/footer" element={<Footer/>}/>
    </Routes>
  </Router> 
  <Footer/>
  </>
  );
}

export default App;
