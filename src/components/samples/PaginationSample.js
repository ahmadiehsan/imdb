import React from 'react';
import Pagination from '../blocks/Pagination';
import {getLocationParams, setPaginationData} from '../../helpers/utils';

class PaginationSample extends React.Component {
    comments = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
    commentsGetter = () => {
        let page = parseInt(getLocationParams(this.props.history).page) || 1;
        return this.comments.slice((page - 1) * 10, page * 10);
    };

    render() {
        let commentNodes = this.commentsGetter().map(function (comment, index) {
            return <li key={index}>{comment}</li>;
        });

        return (
            <React.Fragment>
                <div id="project-comments" className="commentList">
                    <ul>{commentNodes}</ul>
                </div>

                <Pagination data={setPaginationData(this.comments.length, this.props)}/>
            </React.Fragment>
        );
    }
}

export default PaginationSample;