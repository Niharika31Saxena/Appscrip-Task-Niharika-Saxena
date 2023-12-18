import React from 'react';
import '../app/styles/index.css';
import Container from './components/Container';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const page = () => {
  return (
    <div>
     <Navbar/>
      <Container />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default page;
