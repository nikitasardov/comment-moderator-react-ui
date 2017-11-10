import React from "react";

import Card from "./Card";

export default class Board extends React.Component {
/*    constructor(props) {
        super(props);
    }*/

    render() {
        let cards = this.props.data.map(function(article) {
            return <Card
                    key={article.id.toString()}
                    id={article.id}
                    author={article.author}
                    title={article.title}
                    text={article.text}
                    comments={article.comments}
            />
        });

        return (
            <div className="ui container">
                <h2 className="ui header">Comment Moderator</h2>
                <div className="ui two column doubling cards">
                    {cards}
                </div>
            </div>
        );
    }
}
