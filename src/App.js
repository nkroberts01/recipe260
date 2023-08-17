import "./App.css";
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import Explore from './pages/search'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/explore' exact element={<Explore/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
