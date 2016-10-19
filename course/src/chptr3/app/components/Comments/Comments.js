import React from 'react';
import Comment from './Comment/Comment';

class Comments extends React.Component {

    render() {
        const comments = this._getComments() || [];
        return(
            <div className="comment-box">
                <h3>Comments</h3>
                {this._getPopularMessage(comments.length)}
                <h4 className="comment-count">{this._getCommentsTitle(comments.length)}</h4>
                <div className="comment-list">
                    {comments}
                </div>
            </div>
        );
    }

    _getPopularMessage(commentCount) {
        const POPULAR_COUNT = 10;
        if (commentCount > POPULAR_COUNT) {
            return (
                <div>This post is getting really popular, do not miss out!</div>
            );
        }
    }

    _getComments() {
        const commentList = [
            { id: 1, author: 'Clu', body: 'Just say no to love!' },
            { id: 2, author: 'Anne Droid', body: 'I wanna know what love is...' }
        ];

        return commentList.map((comment) => {
            return (<Comment
                author={comment.author}
                body={comment.body}
                avatarUrl={comment.avatarUrl}
                key={comment.id} />);
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
}
export default Comments;
