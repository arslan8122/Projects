import React, { Component } from 'react';
import Photo2 from './Photo2';
import ShowPosts from './ShowPosts';
import ShowPosts2 from './ShowPosts2';
 class Posts2 extends Component {
    render() {
        return (
            <div>
                <div className="container">
                
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 text20">
                        Our Featured Products
                        <hr style ={{width:'50%'}}/>
                        </div>
                        
                        <div className="col-md-4"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 text21">
                        Browse through our range of products!
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                    <div className="row" style={{paddingTop:"60px"}}> </div>
                    <div className="row">
                        
                        
                            {/* <Photo2/> */}
                            <ShowPosts2 items2={this.props.items2} />


        
                            <div className="row">
                            <div className="col-md-4">

                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            
        )
    }
}

export default Posts2;