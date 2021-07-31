import React, {Component} from 'react'
import {Router} from "react-router";
import avatar1 from '../assets/img/avatar1.jpg'
import avatar2 from '../assets/img/avatar2.jpg'
import avatar3 from '../assets/img/avatar3.jpg'
import avatar4 from '../assets/img/avatar4.svg'

class SingleMovie extends Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        this.props.history.goBack();
    }

    tabs() {
        return (
            <div className="uk-width-medium-7-10">
                <div className="">
                    <ul className="uk-tab uk-tab-grid " data-uk-switcher="{connect:'#media-tabs'}">
                        <li className="uk-width-medium-1-3 uk-active"><a href="#">Description</a></li>
                        <li className="uk-width-medium-1-3"><a href="#">Reviews</a></li>
                        <li className="uk-width-medium-1-3"><a href="#">Trailer</a></li>
                        <li className="uk-tab-responsive uk-active uk-hidden" aria-haspopup="true"
                            aria-expanded="false"><a>Active</a>
                            <div className="uk-dropdown uk-dropdown-small uk-dropdown-up">
                                <ul className="uk-nav uk-nav-dropdown"></ul>
                                <div></div>
                            </div>
                        </li>
                    </ul>
                </div>

                <ul id="media-tabs" className="uk-switcher">
                    <li>
                        <h2 className="uk-text-contrast uk-margin-large-top">نام فیلم در اینجا قرار میگیرد<span
                            className="rating uk-margin-small-left uk-h4 uk-text-warning">
                                                <i className="uk-icon-star "></i>
                                                <i className="uk-icon-star"></i>
                                                <i className="uk-icon-star"></i>
                                                <i className="uk-icon-star"></i>
                                                <i className="uk-icon-star"></i>
                                            </span></h2>
                        <ul className="uk-subnav uk-subnav-line">
                            <li><i className="uk-icon-star uk-margin-small-right"></i> 9.5</li>
                            <li><i className="uk-icon-clock-o uk-margin-small-right"></i> 108 Mins</li>
                            <li> March 04, 2016</li>
                        </ul>
                        <hr/>
                            <p className="uk-text-muted uk-h4">Following the events of Age of Ultron, the collective
                                governments
                                of the world pass an act designed to regulate all superhuman activity. This polarizes
                                opinion amongst the Avengers, causing two factions to side with Iron Man or Captain
                                America,
                                which causes an epic battle between former allies.</p>
                            <dl className="uk-description-list-horizontal uk-margin-top">
                                <dt>Starring</dt>
                                <dd>
                                    <ul className="uk-subnav ">
                                        <li><a href="#">Actor 1</a></li>
                                        <li><a href="#">Actor 2</a></li>
                                        <li><a href="#">Actor 3</a></li>
                                    </ul>
                                </dd>
                                <dt>Genres</dt>
                                <dd>
                                    <ul className="uk-subnav ">
                                        <li><a href="#">Comedy </a></li>
                                        <li><a href="#">Romance</a></li>
                                        <li><a href="#">Crime</a></li>
                                    </ul>
                                </dd>
                                <dt>Countries</dt>
                                <dd>
                                    <ul className="uk-subnav ">
                                        <li><a href="#">Canada</a></li>
                                        <li><a href="#">USA</a></li>
                                        <li><a href="#">United Kingdom</a></li>
                                    </ul>
                                </dd>
                            </dl>

                    </li>
                    <li>
                        <div className="uk-margin-small-top">
                            <h3 className="uk-text-contrast uk-margin-top">Post a Review</h3>
                            <div className="uk-alert uk-alert-warning" data-uk-alert="">
                                <a href="" className="uk-alert-close uk-close"></a>
                                <p><i className="uk-icon-exclamation-triangle uk-margin-small-right "></i> Please <a
                                    className="uk-text-contrast" href="login.html"> Log in</a> or Sign up to post
                                    reviews quicker.</p>
                            </div>
                            <form className="uk-form uk-margin-bottom">
                                <div className="uk-form-row">
                                    <textarea className="uk-width-1-1" cols="30" rows="5"
                                              placeholder="Type your review here..."></textarea>
                                    <p className="uk-form-help-block">The <code>.uk-form-help-block</code> class creates
                                        an
                                        associated paragraph.</p>
                                </div>
                                <div className="uk-form-row">
                                    <a href=""
                                       className="uk-button uk-button-large uk-button-success uk-float-right">Post</a>
                                </div>
                            </form>
                        </div>

                        <div className="uk-scrollable-box uk-responsive-width " data-simplebar-direction="vertical">
                            <ul className="uk-comment-list uk-margin-top">
                                <li>
                                    <article className="uk-comment uk-panel uk-panel-space uk-panel-box-secondary">
                                        <header className="uk-comment-header">
                                            <img className="uk-comment-avatar uk-border-circle"
                                                 src={avatar3}
                                                 width="50" height="50" alt=""/>
                                                <h4 className="uk-comment-title">@movielover</h4>
                                                <div className="uk-comment-meta">2 days ago</div>
                                        </header>
                                        <div className="uk-comment-body">
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                                voluptua.</p>
                                        </div>
                                    </article>
                                </li>
                                <li>
                                    <article className="uk-comment uk-panel uk-panel-space uk-panel-box-secondary">
                                        <header className="uk-comment-header">
                                            <img className="uk-comment-avatar uk-border-circle"
                                                 src={avatar1}
                                                 width="50" height="50" alt=""/>
                                                <h4 className="uk-comment-title">@movielover</h4>
                                                <div className="uk-comment-meta">5 days ago</div>
                                        </header>
                                        <div className="uk-comment-body">
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                                voluptua.</p>
                                        </div>
                                    </article>
                                </li>
                                <li>
                                    <article className="uk-comment uk-panel uk-panel-space uk-panel-box-secondary">
                                        <header className="uk-comment-header">
                                            <img className="uk-comment-avatar uk-border-circle"
                                                 src={avatar4}
                                                 width="50" height="50" alt=""/>
                                                <h4 className="uk-comment-title">@movielover</h4>
                                                <div className="uk-comment-meta">23 days ago</div>
                                        </header>
                                        <div className="uk-comment-body">
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                                voluptua.</p>
                                        </div>
                                    </article>
                                </li>
                                <li>
                                    <article className="uk-comment uk-panel uk-panel-space uk-panel-box-secondary">
                                        <header className="uk-comment-header">
                                            <img className="uk-comment-avatar uk-border-circle"
                                                 src={avatar3}
                                                 width="50" height="50" alt=""/>
                                                <h4 className="uk-comment-title">@movielover</h4>
                                                <div className="uk-comment-meta">7 days ago</div>
                                        </header>
                                        <div className="uk-comment-body">
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                                voluptua.</p>
                                        </div>
                                    </article>
                                </li>
                                <li>
                                    <article className="uk-comment uk-panel uk-panel-space uk-panel-box-secondary">
                                        <header className="uk-comment-header">
                                            <img className="uk-comment-avatar uk-border-circle"
                                                 src={avatar2}
                                                 width="50" height="50" alt=""/>
                                                <h4 className="uk-comment-title">@movielover</h4>
                                                <div className="uk-comment-meta">84 days ago</div>
                                        </header>
                                        <div className="uk-comment-body">
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                                voluptua.</p>
                                        </div>
                                    </article>
                                </li>
                                <li>
                                    <article className="uk-comment uk-panel uk-panel-space uk-panel-box-secondary">
                                        <header className="uk-comment-header">
                                            <img className="uk-comment-avatar uk-border-circle"
                                                 src={avatar1}
                                                 width="50" height="50" alt=""/>
                                                <h4 className="uk-comment-title">@movielover</h4>
                                                <div className="uk-comment-meta">3 days ago</div>
                                        </header>
                                        <div className="uk-comment-body">
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                                voluptua.</p>
                                        </div>
                                    </article>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="uk-cover uk-margin-top" style={{height: "400px",textAlign: "center"}}>
                            <iframe data-uk-cover
                                    src="http://www.youtube.com/embed/YE7VzlLtp-4?autoplay=1&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;loop=1&amp;modestbranding=1&amp;wmode=transparent"
                                    width="100%" height="315" frameBorder="0" allowFullScreen=""></iframe>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }

    render() {
        return (
            <div id="tm-media-section" className="uk-block uk-block-small">

                <div className="uk-container uk-container-center uk-width-8-10">
                    <div className="media-container  uk-container-center">
                        <a
                            className="uk-button uk-button-large uk-button-link uk-text-muted"
                            style={{float: "left"}}
                            onClick={this.goBack}
                        >برگشت
                            <i
                                className=" uk-icon-arrow-left uk-margin-small-right"></i></a>
                    </div>

                    <div className="uk-grid">
                        <div className="uk-width-medium-3-10">
                            <div className="media-cover">
                                <img src="https://image.tmdb.org/t/p/w342/zSouWWrySXshPCT4t3UKCQGayyo.jpg" alt="Image"
                                     className="uk-scrollspy-inview uk-animation-fade"/>
                            </div>
                            <a className="uk-button uk-button-primary uk-button-large uk-width-1-1 uk-margin-top"
                               href="login.html"><i
                                className="uk-icon-television uk-margin-small-right"></i>تماشای فیلم</a>
                            <a className="uk-button uk-button-link uk-text-muted uk-button-large uk-width-1-1 uk-margin-top"
                               href="login.html"><i className="uk-icon-heart uk-margin-small-right"></i>
                                افزودن به علاقه مندی‌ ها
                            </a>
                        </div>
                        {this.tabs()}
                    </div>
                </div>

            </div>
        )
    }
}

export default SingleMovie;