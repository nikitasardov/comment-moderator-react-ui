import React from "react";

export default class CommentItem extends React.Component {
    render() {
        return (
            <div className="comment">
                {/*<a className="avatar">
                 <img src="/images/avatar/small/stevie.jpg">
                 </a>*/}
                <div className="content">
                    <a className="author">Stevie Feliciano</a>
                    <div className="metadata">
                        <div className="date">2 days ago</div>
                        <div className="rating">
                            <i className="star icon" />
                            5 Faves
                        </div>
                    </div>
                    <div className="text">
                        Hey guys, I hope this example comment is helping you read this documentation.
                    </div>
                    <div className="ui segment">
                        <div className="ui accordion">
                            <div className="title">
                                <i className="dropdown icon" />
                                What is a dog?
                            </div>
                            <div className="active content">
                                <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
                            </div>
                        </div>
                    </div>
                    <div className="actions">
                        <a className="reply">Reply</a>
                        <a className="save">Save</a>
                        <a className="hide">Hide</a>
                        <a>
                            <i className="expand icon" />
                            Full-screen
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
