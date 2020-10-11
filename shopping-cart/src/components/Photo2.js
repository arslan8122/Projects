import React, { Component } from 'react'
import { addToCart } from '../redux/actions';
import { connect } from 'react-redux';

 class Photo2 extends Component {
    handleClick = (id)=>{
        this.props.addToCart(id);
        console.log("wow"+this.props.addToCart) 
    }
     
    render() {
        return (
            <div>
                 
                                <div className="back">

                                <div className="col-md-2 col-md-offset-0.5">
                                <div className="row product center-block" ><a><img onClick={()=>{this.handleClick(this.props.post.id)}}  height="200px" width="120px" src={this.props.post.img}alt=""/></a> </div>
                                <div className="row">
                                <div className="col-md-6"></div> 
                                <div className="col-md-6"><span>{this.props.post.title}</span></div>   
                                </div>
                                </div>


                                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Photo2)
