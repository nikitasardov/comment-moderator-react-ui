import React, { Component } from "react";

import Card from "../Card.jsx";

export default class Board extends Component {

    render = () => {

        let putUserF = this.props.putUserF;
        let putCommentF = this.props.putCommentF;
        let refreshArticleF = this.props.refreshArticleF;

        let cards = this.props.data.map(function(article) {
            return (
                <Card
                    key={article.id.toString()}
                    id={article.id}
                    author={article.author}
                    title={article.title}
                    text={article.text}
                    comments={article.comments}
                    putUserF={putUserF}
                    putCommentF={putCommentF}
                    refreshArticleF={refreshArticleF}
                />
            )
        });

        return (
            <div className="ui content" style={{'background': '#666'}}>
                <div className="ui container">
                    <h2 className="ui header" style={{'paddingTop': '15px'}}>
                        <i className="doctor icon"/>Comment Moderator
                    </h2>

                    <div className="ui two column doubling cards">
                        {cards}
                    </div>
                </div>
            </div>
        );
    }
}
