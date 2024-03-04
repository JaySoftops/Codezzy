import './App.css';
import React from 'react';
import Header from './commonComponents/Header';
import Home from './components/Home';
import Footer from './commonComponents/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Courses from './components/Courses';
import Events from './components/Events';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
