import React, { Component } from 'react'
 import { Link } from 'react-router-dom';

class AddPhoto extends Component {
    constructor(){
        super()
        this.handlesubmit=this.handlesubmit.bind(this);
        
    }
    handlesubmit(event){
        event.preventDefault()
        const imageLink=event.target.elements.link.value;
        const description=event.target.elements.description.value;
        const post={
            id:Number(new Date()),
            description:description,
            imageLink:imageLink
        }
        if(description && imageLink){
                this.props.addPost(post)
                this.props.onHistory.push('/')
        }
        
    }
    render() {
        return (
            <div>
                <h1>
                    <Link to="/">Photo Wall</Link>
                    </h1>
             <div className='form'>
                <form onSubmit={this.handlesubmit}>
                    <input type="text" placeholder="Link" name="link"/>
                    <input type="text" placeholder="Description" name="description"/>
                    <button className="remove-button">Post</button>
                </form>
             </div>
            </div>
        )
    }
}
export default AddPhoto;