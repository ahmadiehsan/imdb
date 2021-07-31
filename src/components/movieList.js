import React, {Component} from 'react'
import Pagination from "../components/blocks/pagination";
import {Link} from "react-router-dom";
import placeHolder from "../assets/img/placeholder.png"

class MovieList extends Component {
    item() {
        return (
            <div>
                <div className="uk-overlay uk-overlay-hover">
                    <img src={placeHolder} alt="Image"/>
                    <div className="uk-overlay-panel uk-overlay-fade uk-overlay-background  uk-overlay-icon"/>
                    <Link className="uk-position-cover" to={'movie/test'}/>
                </div>
                <div className="uk-panel">

                    <h5 className="uk-panel-title">Media title goes here</h5>
                    <p>
                                        <span className="rating">
                                            <i className="uk-icon-star"/>
                                            <i className="uk-icon-star"/>
                                            <i className="uk-icon-star"/>
                                            <i className="uk-icon-star"/>
                                            <i className="uk-icon-star"/>
                                        </span>
                        <span className="uk-float-right">2016</span>
                    </p>
                </div>
            </div>
        );
    };

    render() {
        return (
            <div className="uk-container uk-container-center uk-margin-large-top uk-margin-large-bottom">
                <div className="uk-grid">
                    <div id="tm-right-section" className="uk-width-large-1-1 uk-width-medium-7-10"
                         data-uk-scrollspy="{cls:'uk-animation-fade', target:'img'}">
                        <div className="uk-grid-width-small-1-3 uk-grid-width-medium-1-4 uk-grid-width-large-1-6"
                             data-uk-grid="{gutter: 20}">
                            {this.item()}
                        </div>
                        <Pagination/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieList;