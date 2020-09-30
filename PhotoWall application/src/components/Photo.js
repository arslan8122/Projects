import React, { Component } from 'react'
// import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
 class Photo extends Component {
    render() {
        // console.log(this.props.posts)
            const post=this.props.post

        return (
            <figure className="figure">
                <Link to={'/single/'+post.id}><img className="photo" src={post.imageLink} alt={post.description}/></Link>
                                
                <figcaption><p>{post.description}</p></figcaption>
                <div className="button-container">
                    <button className="remove-button" onClick={()=>{
                    //    console.log(post)
                    //    this.props.onRemovephoto(post)
                        this.props.removePost(this.props.index);
                    }}>Remove</button>
                </div>
            </figure>
        )
    }
}
// function mapstatetoProps(state){
//     return {
//         posts:state
//     }
// }export defaultconnect(mapstatetoProps)( Photo)
export default Photo;