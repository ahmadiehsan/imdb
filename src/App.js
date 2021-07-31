import React from 'react';
import Nav from './components/navs'
import MovieList from "./components/movieList";
import Footer from "./components/footer";
import {Router,Route,Switch} from "react-router-dom";
import history from "./history";
import SingleMovie from "./components/SingleMovie";
import Login from "./components/login";
import SignUp from "./components/signUp";


function App() {
    return (
        <Router history={history}>
            <Route path={[/^(?!.*(login|signup)).*$/,] } component={Nav}/>
            <Switch>
                <Route path="/" exact component={MovieList}/>
                <Route path="/movie/:id" component={SingleMovie}/>
                <Route path="/login/" component={Login}/>
                <Route path="/signup/" component={SignUp}/>
            </Switch>
            <Route path={[/^(?!.*(login|signup)).*$/]} component={Footer}/>
        </Router>
    );
}

export default App;
