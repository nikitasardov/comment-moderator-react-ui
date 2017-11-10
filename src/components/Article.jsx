import React from "react";

export default class Article extends React.Component {
/*    constructor(props) {
        super(props);
    }*/

    render() {

        return (
            <div className="content">
                <div className="header">
                    {this.props.title}
                    <button className="ui basic mini button"><i className="repeat icon" />Refresh</button>
                </div>

                <div className="meta">
                    <span className="name floating right">
                        {this.props.author.name}
                    </span>
                    <span>Meta Info</span>
                </div>

                <div style={{'maxHeight': '30vh', 'overflowY': 'scroll'}}>
                    {this.props.text}
                </div>
            </div>
        );
    }
}

