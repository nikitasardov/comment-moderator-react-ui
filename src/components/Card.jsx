import React, { Component } from 'react';

import Article from './Article';
import CommentsList from './CommentsList';

export default class Card extends Component {
/*    constructor(props) {
        super(props);
    }*/

    render() {

        return (
            <div className='ui card' style={{'background': '#909090'}}>
                {/*{console.log(this.props.cardData)}*/}
                <Article
                     id={this.props.id}
                     author={this.props.author}
                     title={this.props.title}
                     text={this.props.text}
                />
                <CommentsList comments={this.props.comments} />
            </div>
        );
    }
}
