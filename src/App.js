import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Navbar from './components/navbar.component';
import MovieBrowser from './components/movie-browser.component';
import SelectedMovies from './components/selected-movies.component';

import useLocalStorage from './hooks/use-local-storage';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [userSelection, setUserSelection] = useLocalStorage('userSelection', []);

    return (
        <div className="App" style={rowStyles}>
            <div style={columnStyles}>
                <Navbar userSelection={userSelection} />
                <Router>
                    <Route path="/" exact >
                        <Redirect to="/search?s=space" />
                    </Route>
                    <Route path="/search" exact
                        render={() => <MovieBrowser userSelection={userSelection} setUserSelection={setUserSelection} />}
                    />
                    <Route path="/SelectedMovies" exact
                        render={() => <SelectedMovies userSelection={userSelection} setUserSelection={setUserSelection} />}
                    />
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
