import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar/NavBar';
import Spreadsheet from './Components/Sheet/Spreadsheet';
import HeaderBar from './Components/HeaderBar/HeaderBar';
import Header from './Components/Head/Header';
import Footer from './Components/Footer/Footer';



const App: React.FC = () => {
  return (
    <>
    <Router>
      <HeaderBar />
      <Navbar />
      <Header />
      <Spreadsheet />
      <Footer />
    </Router>
    </>
  );
};
export default App;