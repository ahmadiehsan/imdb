import React, {Component} from 'react'
import bg from '../../assets/img/bg.jpg'
import logo from '../../assets/img/logo.svg'


class SignIn extends Component {
    render() {
        return (
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
                            <h2 className="uk-margin-large-bottom uk-text-muted">Log in</h2>
                            <div className="uk-form-row">
                                <div className="uk-form-icon uk-form-icon-flip uk-width-1-1">
                                    <input type="text" className="uk-width-1-1" placeholder="Username"/>
                                    <i className="uk-icon-user"/>
                                </div>
                            </div>
                            <div className="uk-form-row">
                                <div className="uk-form-icon uk-form-icon-flip uk-width-1-1">
                                    <input type="password" className="uk-width-1-1" placeholder="Password"/>
                                    <i className="uk-icon-lock "></i>
                                </div>
                            </div>
                            <div className="uk-form-row uk-text-small">
                                <label className="uk-float-left"><input type="checkbox"/> Remember Me</label>
                                <a className="uk-float-right uk-link " href="forgot-password.html">Forgot
                                    Password?</a>
                            </div>
                            <div className="uk-form-row">
                                <a className="uk-width-1-1 uk-button uk-button-success uk-button-large" href="#">Log
                                    in</a>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn