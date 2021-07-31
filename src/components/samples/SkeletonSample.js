import React from 'react';
import Skeleton from 'react-skeleton-loader';

class PaginationSample extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div><Skeleton height={'100px'} widthRandomness={0}/></div>
                <Skeleton count={3}/>
                <h1>props.title | <Skeleton /></h1>
                <p>props.body | <Skeleton count={5} /></p>
            </React.Fragment>
        );
    }
}

export default PaginationSample;