import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar.component';
import MovieBrowser from './components/movie-browser.component';
import SelectedMovies from './components/selected-movies.component';
import MovieDetails from './components/movie-details.component';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    let rowStyles = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center'
    };

    let columnStyles = {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        flexBasis: '90%'
    };

    return (
        <div className="App" style={rowStyles}>
            <div style={columnStyles}>
                <Navbar />
                <br />
                <Router>
                    <Route path="/" exact component={MovieBrowser} />
                    <Route path="/SelectedMovies" exact component={SelectedMovies} />
                    <Route path="/MovieDetails" exact component={MovieDetails}/>
                </Router>
            </div>
      </div>
    );
}

export default App;
