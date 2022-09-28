import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './navigation/Navbar';
import Navigation from './navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
      <nav>
        {/* <Navbar/> */}
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
