import React, { Component } from 'react'
import ShowCart from './ShowCart';

 class FirstCart extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div style={{paddingTop:"120px"}}className="row">

                        
                    </div>
                    <div className="row">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 text20">
                        Shopping Cart
                        <hr style ={{width:'50%'}}/>
                        </div>
                        
                        <div className="col-md-4"></div>
                    </div>

                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-2 cart2">
                            Item
                        </div>
                        <div className="col-md-2 cart2">
                            ID
                        </div>
                        <div className="col-md-2 cart2">
                            Title
                        </div>
                        <div className="col-md-2 cart2">
                            Quantity
                        </div>
                        <div className="col-md-2 cart2">
                            Price
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    
                        {/* <hr /> */}
                  
                            <ShowCart/>
                </div>
        
                
          
            </div> 
           
        )
    }
}
export default FirstCart;