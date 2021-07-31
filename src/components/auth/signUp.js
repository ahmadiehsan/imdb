import React, {Component} from 'react'
import bg from '../../assets/img/bg.jpg'
import logo from '../../assets/img/logo.svg'
import {Helmet} from "react-helmet";

class SignUp extends Component {
    render() {
        return (
            <>
                <Helmet><title>ثبت نام</title></Helmet>
                <div className="uk-overlay uk-text-center uk-vertical-align uk-height-1-1">
                    <img className="uk-animation-fade tm-bg-cover" src={bg} width="100%" height="100%"
                         alt=""/>
                    <div className="uk-vertical-align  uk-overlay-panel uk-overlay-background">
                        <div
                            className=" uk-vertical-align-middle uk-text-center  uk-width-medium-3-10 uk-width-large-2-10 uk-container-center">

                            <div
                                className="uk-margin-large-bottom  uk-animation-reverse uk-animation-scale uk-animation-hover">
                                <img className="uk-margin uk-margin-remove" width="200" height="40" alt="logo"
                                     src={logo}/>
                            </div>
                            <form className=" uk-form">
                                <h2 className="uk-margin-large-bottom uk-text-muted">Sign up</h2>
                                <div className="uk-form-row">
                                    <a href="#"
                                       className="uk-button uk-button-social uk-width-1-4 uk-button-facebook"><i
                                        className="uk-icon-medium uk-icon-facebook"></i></a>
                                    <a href="#" className="uk-button uk-button-social uk-width-1-4 uk-button-twitter"><i
                                        className="uk-icon-medium uk-icon-twitter"></i></a>
                                    <a href="#" className="uk-button uk-button-social uk-width-1-4  uk-button-google"><i
                                        className="uk-icon-medium uk-icon-google-plus"></i></a>
                                    <p className="uk-text-center uk-margin-large-top">OR</p>
                                </div>
                                <div className="uk-form-row">
                                    <div className="uk-form-icon uk-form-icon-flip uk-width-1-1">
                                        <input type="text" className="uk-width-1-1" placeholder="Username"/>
                                        <i className="uk-icon-user"></i>
                                    </div>
                                </div>
                                <div className="uk-form-row">
                                    <div className="uk-form-icon uk-form-icon-flip uk-width-1-1">
                                        <input type="email" className="uk-width-1-1" placeholder="Email"/>
                                        <i className="uk-icon-envelope"></i>
                                    </div>
                                </div>
                                <div className="uk-form-row">
                                    <div className="uk-form-icon uk-form-icon-flip uk-width-1-1">
                                        <input type="password" className="uk-width-1-1" placeholder="Password"/>
                                        <i className="uk-icon-lock "></i>
                                    </div>
                                </div>
                                <div className="uk-form-row uk-text-small">
                                    <label className="uk-float-left"><input type="checkbox"/> I agree to the
                                        Terms &amp; Conditions</label>
                                </div>
                                <div className="uk-form-row">
                                    <a className="uk-width-1-1 uk-button uk-button-primary uk-button-large" href="#">Sign
                                        up</a>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default SignUp;