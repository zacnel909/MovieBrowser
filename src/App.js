import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import Navbar from './components/nabar.component';
import MovieBrowser from './components/movie-browser.component';
import SelectedMovies from './components/selected-movies.component';
import MovieDetails from './components/movie-details.component';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div className="App">
          <Router>
              <Route path="/" exact component={MovieBrowser} />
              <Route path="/SelectedMovies" exact component={SelectedMovies} />
              <Route path="/MovieDetails" exact component={MovieDetails}/>
          </Router>
      </div>
  );
}

export default App;
