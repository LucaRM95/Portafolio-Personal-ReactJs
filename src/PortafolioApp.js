import AppRouter from './Routes/AppRouter';
import NavBar from './components/Home/NavBar';
import Footer from './components/Home/Footer';
import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

function PortafolioApp() {

  useEffect(() => {
    Aos.init();
  },[])

  return (
    <Router>
      <NavBar />
      <AppRouter />
      <Footer />
    </Router>
  );
}

export default PortafolioApp;
