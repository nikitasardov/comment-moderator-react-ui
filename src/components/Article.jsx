import React, {Component} from "react";

export default class Article extends Component {
    /*    constructor(props) {
     super(props);
     }*/

    render() {

        return (
            <div className="content" style={{'maxHeight': '30vh'}}>
                <div className="header">
                    <i className="file text outline icon"/>{this.props.title}
                    <button className="ui right floated green mini button">
                        <i className="repeat icon"/>Refresh
                    </button>
                </div>

                <div className="meta" style={{'clear':'both'}}>
                    <span className="name">
                        <i className="user icon"/>{this.props.author.name}
                    </span>
                    <span className="ui right floated"><i className="protect icon"/>Article data cannot be modified</span>
                </div>

                <div style={{'maxHeight': '15vh', 'overflowY': 'scroll'}}>
                    <div className="ui raised inverted blue segment">
                        {this.props.text}
                    </div>
                </div>
            </div>
        );
    }
}

