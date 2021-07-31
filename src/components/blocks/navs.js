import React, {Component} from 'react'
import {Link} from "react-router-dom";

class Nav extends Component {
    //render search form
    searchForm = () => {
        return (
            <div className="uk-navbar-flip">
                <form className="uk-search uk-margin-small-top uk-margin-left uk-hidden-small">
                    <input className="uk-search-field" type="search" placeholder="متن خود را وارد کنید"
                           autoComplete="off"/>
                    <div className="uk-dropdown uk-dropdown-flip uk-dropdown-search"
                         aria-expanded="false"></div>
                </form>
            </div>
        )
    };

    //render categories
    categories = () => {
        return (
            <ul className="uk-navbar-nav">
                <li className="uk-active"><a href="">جدیدترین ها</a></li>
                <li><a href="">محبوب ترین ها</a></li>
                <li className="uk-parent" data-uk-dropdown>
                    <a href="">ژانر فیلم ها <i className="uk-icon-angle-down uk-margin-small-left"></i></a>
                    <div className="uk-dropdown uk-dropdown-navbar">
                        <ul className="uk-nav uk-nav-navbar">
                            <li><a href="#">اکشن</a></li>
                            <li><a href="#">انیمیشن</a></li>
                            <li><a href="#">مستند</a></li>
                            <li><a href="#">ماجراجویی</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        )
    };

    //render login or logout buttons
    buttons = () => {
        return (
            <div className="uk-button-group">
                <Link to={'/signup'} className="uk-button uk-button-link uk-button-large">ثبت نام</Link>
                <Link to={'/login'} className="uk-button uk-button-success uk-button-large uk-margin-left">
                    ورود
                    <i className="uk-icon-lock uk-margin-small-right"></i>
                </Link>
            </div>
        )
    };

    //render topper nav
    topNav = () => {
        return (
            <nav id="tm-header" className="uk-navbar ">
                <div className="uk-container uk-container-center ">
                    <Link to={'/'} className="uk-navbar-brand uk-hidden-small">
                        <i className="uk-icon-small uk-text-primary uk-margin-small-right uk-icon-play-circle"/>
                           موویو
                    </Link>
                    <div className="uk-navbar-flip uk-hidden-small">
                        {this.buttons()}
                    </div>
                    <div className="uk-navbar-brand uk-navbar-center uk-visible-small">
                        <i className="uk-icon-small uk-text-primary uk-margin-small-right uk-icon-play-circle"/> موویو
                    </div>
                </div>
            </nav>
        )
    };

    //render downer nav
    bottomNav = () => {
        return (
            <nav className="uk-navbar uk-navbar-secondary  uk-hidden-small">
                <div className="uk-container-center uk-container">
                    {this.categories()}
                    {this.searchForm()}
                </div>
            </nav>
        );
    };


    render() {
        return (
            <div id={"nav"}>
                {this.topNav()}
                {this.bottomNav()}
            </div>
        )
    }
}

export default Nav;