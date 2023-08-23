import "./App.css";
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import Explore from './pages/search'
import NewRecipe from './pages/newRecipe'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/explore' exact element={<Explore/>} />
          <Route path='/newRecipe' exact element={<NewRecipe/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
