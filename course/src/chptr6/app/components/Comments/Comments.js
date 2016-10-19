import React from 'react';
import Comment from './Comment/Comment';
import CommentForm from './CommentForm/CommentForm';
import $ from 'jquery';

class Comments extends React.Component {

    constructor() {
        super();

        this.state = {
            showComments: false,
            comments: []
        };
    }


    _fetchComments() {
        $.ajax({
            method: 'GET',
            url: 'http://localhost:3004/db',
            success: (comments) => {
                this.setState({comments});
            }
        });
    }

    componentWillMount(){
        this._fetchComments();
    }

    _getPopularMessage(commentCount) {
        const POPULAR_COUNT = 10;

        if(commentCount > POPULAR_COUNT){
            return (<div>Deze posts zijn #awesome.</div>)
        }

    }

    _getComments() {
        return this.state.comments.map((comment) => {
            return (<Comment
                id={comment.id}
                author={comment.author}
                body={comment.body}
                key={comment.id}
                onDelete={this._deleteComment.bind(this)} />);
        });
    }

    _getCommentsTitle(commentCount) {
        if (commentCount === 0) {
            return 'No comments yet';
        } else if (commentCount === 1) {
            return '1 comment';
        } else {
            return `${commentCount} comments`;
        }
    }

    _addComment(commentAuthor, commentBody) {
        let comment = {
            id: Math.floor(Math.random() * (9999 - this.state.comments.length + 1)) + this.state.comments.length,
            author: commentAuthor,
            body: commentBody
        };

        this.setState({
            comments: this.state.comments.concat([comment])
        });
    }
    _deleteComment(commentID) {
        const comments = this.state.comments.filter(
            comment => comment.id !== commentID
        );
        console.log("comment id " , commentID);
        this.setState({ comments });
    }


    render() {
        const comments = this._getComments() || [];

        return(
            <div className="comment-box">
                <CommentForm addComment={this._addComment.bind(this)} />

                <h3>Comments</h3>
                {this._getPopularMessage(comments.length)}
                <h4 className="comment-count">{this._getCommentsTitle(comments.length)}</h4>
                <div className="comment-list">
                    {comments}
                </div>
            </div>
        );
    }
}
export default Comments;
