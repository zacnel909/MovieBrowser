import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Navbar from './components/navbar.component';
import MovieBrowser from './components/movie-browser.component';
import SelectedMovies from './components/selected-movies.component';
import MovieDetails from './components/movie-details.component';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App" style={rowStyles}>
            <div style={columnStyles}>
                <Navbar />
                <Router>
                    <Route path="/" exact >
                        <Redirect to="/search?s=default" />
                    </Route>
                    <Route path="/search" exact component={MovieBrowser} />
                    <Route path="/SelectedMovies" exact component={SelectedMovies} />
                    <Route path="/MovieDetails" exact component={MovieDetails} />
                </Router>
            </div>
        </div>
    );
}

//Styles
let rowStyles = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center'
};

let columnStyles = {
    flexDirection: 'column',
    flexWrap: 'nowrap',
    width: '100%',
    height: '100vh'
};

export default App;
