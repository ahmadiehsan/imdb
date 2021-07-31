import React from 'react';
import {Helmet} from 'react-helmet';

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet><title>صفحه اصلی</title></Helmet>

                Home Page
            </React.Fragment>
        );
    }
}

export default Home;