import NavigationBar from '../Container/Navbar/Navbar';
import Profile from '../Container/Home/Profile';
import AboutMe from '../Container/AboutMe/AboutMe';
import ContactMe from '../Container/ContactMe/ContactMe';
import Projects from '../Container/Projects/Projects';
import React from 'react';


function Home() {
  return (
    <div>
    <div className='Navbar'>
      <NavigationBar/>
    </div>
    <div className="App">
      <section id='home'><Profile/></section>
      <section id='about'><AboutMe/></section>
      <section id='projects'><Projects/></section>
      <section id='contact'><ContactMe/></section>
    </div>
    </div>
  );
}

export default Home;