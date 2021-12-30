import './App.css';
import LandingPage from './components/Home/LandingPage';
import AppRouter from './Routes/AppRouter';

function PortafolioApp() {
  return (
    <AppRouter>
      <LandingPage />
    </AppRouter>
  );
}

export default PortafolioApp;
