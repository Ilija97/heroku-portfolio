import './App.css';
import Home from './pages/Home';
import Profile from './Container/Home/Profile';
import NavigationBar from './Container/Navbar/Navbar';
import AboutMe from './Container/AboutMe/AboutMe';
import ContactMe from './Container/ContactMe/ContactMe';
import Projects from './Container/Projects/Projects';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/projects" element={<Projects />}/> 
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
