import React, { Component } from 'react';
import { connect } from 'react-redux';

import Article from './articles/Article.jsx';
import CommentsList from './comments/CommentsList.jsx';

@connect((store) => {
    return {
        articles: store.data.articles,
        view: store.navigation.view
    };
})
export default class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='ui card' style={{'background': '#909090'}}>
                <Article
                     id={this.props.id}
                     author={this.props.author}
                     title={this.props.title}
                     text={this.props.text}
                />
                <CommentsList
                    comments={this.props.comments}
                />
            </div>
        );
    }
}
