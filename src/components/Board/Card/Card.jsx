import React, { Component } from 'react';

import Article from './Article';
import CommentsList from './Comment/CommentsList';

export default class Card extends Component {

    render = () => {
        let putUserF = this.props.putUserF;
        let putCommentF = this.props.putCommentF;
        let refreshArticleF = this.props.refreshArticleF;

        return (
            <div className='ui card' style={{'background': '#909090'}}>
                {/*{console.log(this.props.cardData)}*/}
                <Article
                     id={this.props.id}
                     author={this.props.author}
                     title={this.props.title}
                     text={this.props.text}
                     refreshArticleF={refreshArticleF}
                />
                <CommentsList
                    comments={this.props.comments}
                    putUserF={putUserF}
                    putCommentF={putCommentF}
                />
            </div>
        );
    }
}
