import AppRouter from './Routes/AppRouter';
import NavBar from './components/Home/NavBar';
import Footer from './components/Home/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

function PortafolioApp() {
  return (
    <Router>
      <NavBar />
      <AppRouter />
      <Footer />
    </Router>
  );
}

export default PortafolioApp;
