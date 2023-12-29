import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Auth from './pages/auth'
import Home from './pages/home'
import Movies from './pages/Movie'
import TvShows from './Tvshows'
import Rated from './pages/rated'
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/rated' element={<Rated />} />
          <Route path='/movie/:id' element={<Movies />} />
          <Route path='/tvShow/:id' element={<TvShows />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
