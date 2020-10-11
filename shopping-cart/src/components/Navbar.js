import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
    
    console.log("nav"+this.props.posts.addedItems.length)
        return (
            <div>
                
                <header>    
                    <div className="logo">index.</div>
                    <nav>
                    
                    <ul>
                   
                   <li> <a className="active"   href="">Services</a></li> 
                   <li><a   href="">Frame</a></li> 
                   <li><a   href="">Blog</a></li> 
                   <li><a   href="">Contact Us</a></li> 
                   <li><a   href="">Gifts</a></li> 
                   <li><a href="" >
                        <img height="28px" width="34px"   src={process.env.PUBLIC_URL + '/images/user-account-icon.png' }alt=""/>
                    </a></li>
                    <Link  to='/cart'>   <li className="rank" ><a href="" ><p><span class='cart-counter'>{this.props.posts.addedItems.length}</span></p>
       <img  height="34px" width="34px" className="cart" src={process.env.PUBLIC_URL + '/images/cart-icon.png' }alt=""/>
                    </a></li></Link>
                    </ul>
                    
                    </nav>
                    
                    <div className="cart">
                        <img src="" alt=""/>
                    </div>
                </header>
                
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        posts: state
        //addedItems: state.addedItems
    }
}

export default connect(mapStateToProps)(Navbar)
