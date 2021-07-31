import React,{Component} from 'react'

class Pagination extends Component {
    render() {
        return(
            <div className="uk-margin-large-top uk-margin-bottom">
                <ul className="uk-pagination">
                    <li className="uk-disabled"><span><i className="uk-icon-angle-double-left"/></span></li>
                    <li className="uk-active"><span>1</span></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><span>...</span></li>
                    <li><a href="#">20</a></li>
                    <li><a href="#"><i className="uk-icon-angle-double-right"/></a></li>
                </ul>
            </div>
        );
    }
}

export default Pagination