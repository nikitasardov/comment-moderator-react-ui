import React from "react";

export default class Article extends React.Component {

    render() {
        return (
            <div className="content">
                <div className="header">
                    Article Header <button className="ui basic mini button"><i className="repeat icon" />Refresh</button>
                </div>
                <div className="meta">
                    <span className="name floating right">Some Name</span>
                    <span>Meta Info</span>
                </div>
                <div style={{'maxHeight': '30vh', 'overflow-y': 'scroll'}}>
                    <p>Article content Article content Article content Article content Article content Article content </p>
                    <p>Article content Article content Article content Article content Article content Article content
                        content Article content Article content content Article content Article content content Article content Article content</p>
                    <p>content Article content Article content content Article content Article content content Article content Article content content Article content Article content
                        content Article content Article content content Article content Article content content Article content Article content
                        content Article content Article content content Article content Article content </p>
                </div>
            </div>
        );
    }
}

