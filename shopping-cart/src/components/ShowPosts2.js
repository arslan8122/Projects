import React, { Component } from 'react';
import Photo2 from './Photo2';

 class ShowPosts2 extends Component {
    render() {
        return (
            <div>
                {this.props.items2.map((items2,index)=> <Photo2 key={index} post={items2}/>)}
            </div>
        )
    }
}
export default ShowPosts2;