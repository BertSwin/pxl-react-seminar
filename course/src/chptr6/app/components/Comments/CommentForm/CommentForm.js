import React from 'react';

class CommentForm extends React.Component {


    constructor() {
        super();
        this.state = {
            characters: 0
        };
    }


    render() {
        return (
            <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
                <label>New comment</label>
                <div className="comment-form-fields">
                    <input placeholder="Name:" ref={(input) => this._author = input} />
                    <textarea placeholder="Comment:"
                              ref={(body) => this._body= body}
                              onKeyUp={this._getCharacterCount.bind(this)}
                    ></textarea>
                    <p>{this.state.characters} characters</p>

                </div>
                <div className="comment-form-actions">
                    <button type="submit">
                        Post comment
                    </button>
                </div>
            </form>
        );
    }
    _getCharacterCount(){
        this.setState({characters: this._body.value.length})
    }

    _handleSubmit(event) {
        event.preventDefault();

        if( !this._author.value || !this._body.value ){
            alert("Please enter your name and comment.");
            return;
        }

        this.props.addComment(this._author.value, this._body.value);

        this._author.value = '';
        this._body.value = '';

        this.setState({ characters: 0  });
    }
}

export default CommentForm;