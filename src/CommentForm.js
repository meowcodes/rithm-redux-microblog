import React, { Component } from 'react';

class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }


    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.triggerAddComment(this.state.text);
        this.setState({
            text: ""
        })
    }


    render() {
        return (
            <div className="CommentForm">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        placeholder="New Comment"
                        value={this.state.text}
                        name="text"
                        onChange={this.handleChange}
                    ></input>
                    <button>Add!</button>
                </form>
            </div>
        );
    }
}

export default CommentForm;