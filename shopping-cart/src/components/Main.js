import React, { Component } from 'react'
import Navbar from './Navbar';
import Home from  './Home';
import {Route} from 'react-router-dom';
import Cart from './Cart';
import Footer from './footer';

 class Main extends Component {
    render() {
        // console.log(this.props.posts.items)
        return (
            
                

            <div>


            <Route exact path="/" render={()=>(
            <div>
            <Navbar/>
                <Home posts={this.props.posts.items} items2={this.props.posts.items2} />
                

            </div>
            


            )} />
             <Route  path="/cart" render={()=>(
            <div>
            <Navbar/>
                <Cart/>
            </div>
            )} />

                
                
                

            </div>
            


        )
    }
}
export default Main;