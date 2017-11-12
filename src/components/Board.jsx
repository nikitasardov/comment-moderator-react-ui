import React, { Component } from "react";

import Card from "./Card";

export default class Board extends Component {
/*    constructor(props) {
        super(props);
    }*/

    render() {
        console.log('Board props',this.props);
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
            <div className="ui content" style={{'background': '#666'}}>
                <div className="ui container">
                    <h2 className="ui header" style={{'paddingTop': '15px'}}><i className="doctor icon"/>Comment Moderator</h2>
                    <div className="ui two column doubling cards">
                        {cards}
                    </div>
                </div>
            </div>
        );
    }
}
