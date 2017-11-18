import React, { Component } from "react";

import Card from "./Card";

export default class Board extends Component {

    noDataError = () => {
        return (
            <div className="ui content" style={{'background': '#666', 'height': '100vh'}}>
                <div className="ui container">
                    <h2 className="ui header" style={{'paddingTop': '15px'}}>
                        <i className="doctor icon"/>Comment Moderator</h2>
                    <div className='ui card' style={{'background': '#909090'}}>
                        <div className="ui raised inverted red segment">
                            Failed to get data from server.<br />
                            Look for details on network tab<br /><br />
                            <a href="http://91.201.41.52:4567/api/articles"
                               target="_blank"
                               className="ui positive fluid button">Try to see json response</a><br />
                            If you see nothing - server is down
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render = () => {
        if (!this.props.gotData) {
            return this.noDataError();
        }

        let putUserF = this.props.putUserF;

        let cards = this.props.data.map(function(article) {
            return <Card
                    key={article.id.toString()}
                    id={article.id}
                    author={article.author}
                    title={article.title}
                    text={article.text}
                    comments={article.comments}
                    putUserF={putUserF}
            />
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
