import React from 'react';
import RemoveCommentConfirmation from '../RemoveCommentConfirmation/RemoveCommentConfirmation';

class Comment extends React.Component{

    constructor(){
        super();
        this.state = {isAbusive: false};
    }

    _toggleAbuse(event){
        event.preventDefault();
        this.setState({isAbusive:!this.state.isAbusive});
    }
    _handleDelete() {
        this.props.onDelete(this.props.id);
    }

    render(){

        let commentBody;
        if( !this.state.isAbusive){
            commentBody = this.props.body
        }
        else{
            commentBody = <em>Content marked as abusive</em>;
        }


        return (
            <div className="comment">
                <p className="comment-header">{this.props.author}</p>
                <p className="comment-body">
                    {commentBody}
                </p>
                <div className="comment-actions">
                    <RemoveCommentConfirmation  onDelete={this._handleDelete.bind(this)}/>
                    <a href="#" onClick={this._toggleAbuse.bind(this)}>Report as Abuse</a>
                </div>
            </div>
        )
    }
}

export default Comment;