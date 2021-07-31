import React from 'react';
import Nav from './blocks/navs'
import MovieList from "./movieList";
import Footer from "./blocks/footer";
import {Router,Route,Switch} from "react-router-dom";
import history from "./history";
import SingleMovie from "./SingleMovie";
import Login from "./auth/signIn";
import SignUp from "./auth/signUp";


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
