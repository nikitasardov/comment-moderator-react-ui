import React from 'react';

import Board from './Board';
//import './css/Common.css';

export default class App extends React.Component {
/*    constructor(props) {
        super(props);
        this.state = {
            users: [],
            comments: [],
            articles: []
        };
    }*/

    render() {

        return (
            <div>
                {/*<Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />*/}
                <Board data={this.props.data} />
                {/*<Footer />*/}
            </div>
        );
    }
}
