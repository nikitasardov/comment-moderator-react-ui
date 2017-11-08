import React from 'react';

import Article from './Article';
import CommentsList from './CommentsList';

export default class Card extends React.Component {

    render() {
        return (
            <div className='ui card'>
                <Article />
                <CommentsList />
            </div>
        );
    }
}
