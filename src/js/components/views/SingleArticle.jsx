import React, {Component} from "react";

import Breadcrumbs from '../Breadcrumbs.jsx';
import Article from '../articles/Article.jsx';

export default class SingleArticle extends Component {
/*    constructor(props) {
        super(props);
    }*/

    render() {
        const { article } = this.props;
        return (
            <div className="ui content" style={{'background': '#666', 'height': '100vh'}}>
                <div className="ui container">
                    <h3 className="header" style={{'paddingTop': '15px'}}>
                        <i className="doctor icon"/>Comment moderator
                    </h3>
                    <Breadcrumbs viewTitle={'Single article "' + article.title + '"'}/>

                    <div className="ui cards">
                        <div
                            className='ui fluid card'
                            style={{'background': '#909090'}}
                        >
                            <Article
                                id={article.id}
                                author={article.author}
                                title={article.title}
                                text={article.text}
                                comments={article.comments}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
