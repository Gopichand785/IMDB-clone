import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/header/Header'
import './App.css'
import Home from './pages/home/Home'
import MovieList from './components/movielist/MovieList'
import Movie from './pages/MovieData/Movie'
 function App() {
  return (
    <div className='App'>
      <Router>
      <Header/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='movie/:id' element={<Movie/>}/> {/* movie/:id is dyanamic routing  render the component*/}
          <Route path='movies/:type' element={<MovieList/>}/> 
          <Route path='/*' element={<h1>Error page</h1>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App