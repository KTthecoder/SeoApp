import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './navigation/Navbar';
import Navigation from './navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <nav>
        <Navbar/>
      </nav>
      <main>
        <Navigation/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </BrowserRouter>
  );
}

export default App;
