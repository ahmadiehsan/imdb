import React, {Component} from 'react'

class Footer extends Component {
    render() {
        return (
            <footer id="tm-footer" className="uk-block uk-block-secondary uk-block-small">
                <div className="uk-container-center uk-container">
                    <div className="uk-grid">
                        <div className="uk-width-medium-3-10">
                            <div className="copyright-text">&copy; 2016 <span className="uk-text-bold">موویو</span> -
                                مجله سرگرمی ایرانی
                            </div>
                        </div>
                        <div className="uk-width-medium-5-10">
                            <ul className="uk-subnav ">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">FAQ's</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="uk-width-medium-2-10">
                            <div className=" uk-float-right">
                                <ul className="uk-subnav">
                                    <li><a href="#"
                                           className="uk-icon-hover uk-icon-medium uk-icon-facebook-square"></a></li>
                                    <li><a href="#" className="uk-icon-hover uk-icon-medium uk-icon-twitter"></a></li>
                                    <li><a href="#" className="uk-icon-hover uk-icon-medium uk-icon-instagram"></a></li>
                                    <li><a href="#" className="uk-icon-hover uk-icon-medium uk-icon-pinterest"></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;