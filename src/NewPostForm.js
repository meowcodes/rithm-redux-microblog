import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewPostForm extends Component {

    constructor(props) {
        super(props);
        this.state={
            title: "",
            description: "",
            body: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.triggerAdd(this.state);
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="NewPostForm">
                <form onSubmit={this.handleSubmit}>

                    <label htmlFor="title">Title: </label>
                    <input name="title" id="title" 
                    value={this.state.title}  onChange={this.handleChange}/>

                    <label htmlFor="description">Description: </label>
                    <input name="description" id="description" 
                    value={this.state.description}  onChange={this.handleChange}/>

                    <label htmlFor="body">Body: </label>
                    <textarea name="body" id="body" 
                    value={this.state.body}  onChange={this.handleChange}/>
                    
                    <button type="submit"> Save </button>
                    <Link to="/"><button> Cancel </button></Link>
                    
                </form>
            </div>
        );
    }
}

export default NewPostForm;