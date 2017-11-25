import React, {Component} from "react";

import Breadcrumbs from '../Breadcrumbs.jsx';
import Article from '../articles/Article.jsx';

export default class ArticlesList extends Component {

    render() {

        let articleCards = this.props.data.map(function (article) {
            return (
                <div
                    key={article.id.toString()}
                    className='ui fluid card'
                    style={{'background': '#909090'}}
                >
                    <Article
                        id={article.id}
                        excerpt={true}
                        author={article.author}
                        title={article.title}
                        text={article.text}
                        comments={article.comments}
                    />
                </div>
            )
        });

        return (
            <div className="ui content" style={{'background': '#666', 'height': '100vh'}}>
                <div className="ui container">
                    <h3 className="header" style={{'paddingTop': '15px'}}>
                        <i className="doctor icon"/>Comment moderator
                    </h3>
                    <Breadcrumbs />

                    <div className="ui cards">
                        {articleCards}
                    </div>
                </div>
            </div>
        );
    }
}
