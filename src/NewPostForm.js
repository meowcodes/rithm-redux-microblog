import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NewPostForm extends Component {
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