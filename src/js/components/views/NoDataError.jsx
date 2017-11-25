import React, { Component } from "react";

export default class NoDataError extends Component {
    render() {
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
}
