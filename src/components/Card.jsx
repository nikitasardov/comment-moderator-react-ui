import React from 'react';

import Article from './Article';
import CommentsList from './CommentsList';

export default class Card extends React.Component {
/*    constructor(props) {
        super(props);
    }*/

    render() {

        return (
            <div className='ui card'>
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
