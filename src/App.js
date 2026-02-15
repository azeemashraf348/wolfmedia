import './App.css'; 
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import VirtualStaging from './components/VirtualStaging';
import TwilightDusk from './components/TwilightDusk';  
import Single from './components/Single';  
import Renovation from './components/Renovation';  
import Removal from './components/Removal';  
import HDR from './components/HDR';  
function App() {
  return (
    <div className="App">
       <Router> 
      <Routes> 
        <Route path="/" element={<Navigate replace to="/Header" />} />  
        <Route path="/Header" element={<Header/>}/> 
        <Route path="/AboutUs" element={<AboutUs/>}/> 
        <Route path="/Services" element={<Services/>}/> 
        <Route path="/VirtualStaging" element={<VirtualStaging/>}/>
        <Route path="/TwilightDusk" element={<TwilightDusk/>}/>
        <Route path="/Single" element={<Single/>}/>
        <Route path="/Renovation" element={<Renovation/>}/>
        <Route path="/Removal" element={<Removal/>}/>
        <Route path="/HDR" element={<HDR/>}/>
      </Routes>
  </Router>
    </div>
  );
}

export default App;
