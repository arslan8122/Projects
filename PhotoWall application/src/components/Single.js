import React, { Component } from 'react'
import Photo from './Photo';
import Comments from './Comments'

 class Single extends Component {
    render() {
            const id=Number(this.props.match.params.id);
            const posts=this.props.posts;
            const post=posts.find((post)=>post.id===id)
            const comments=this.props.comments
        return (
          
            <div>
            <div>
               <h1>Photo wall</h1>
            </div>
            
            <div className='single-photo'>
               <Photo post={post} />            </div>
                <Comments addComment={this.props.addComment} comments={comments}/>

            </div>
        )
    }
}
export default Single;