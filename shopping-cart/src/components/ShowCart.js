import React, { Component } from 'react'

 class ShowCart extends Component {
    render() {
        console.log("Last"+this.props.item.id)
        console.log("function"+ this.props.OnClick)
        return (
            <div>
               
                <div className="container">
                    
                
                    
                        {/* <hr /> */}
                  
                    <div className="row">
                        
                        <div className="col-md-1"></div>
                        <div className="col-md-2 cart2">
                        <div className="row "><img style={{paddingLeft:'5px'}} height="50px" width="50px" src={this.props.item.img}alt=""/> </div>
                        </div>
                        <div className="col-md-2 cart2">
                            {this.props.item.id}
                        </div>
                        <div className="col-md-2 cart2">
                        {this.props.item.title}
                        </div>
                        <div className="col-md-2 cart2">
                        {this.props.item.quantity}
                        </div>
                        <div className="col-md-2 cart2">
                        {this.props.item.price}
                        </div>
                        <div className="col-md-1">
                        <button onClick={()=>{this.props.OnClick(this.props.item.id)}} type="submit"><img src={process.env.PUBLIC_URL + '/images/remove-btn.png'} alt="Submit"/></button>
                        </div>
                    </div>
                </div>
        
                
          
            </div>
        )
    }
}
export default ShowCart