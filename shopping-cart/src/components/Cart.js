import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeItem,addQuantity,subtractQuantity} from '../redux/actions';
import Showcart from './ShowCart';

 class Cart extends Component {

    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }

    render() {
    //     
    let addedItems = this.props.items.length ?
    (  
        this.props.items.map(item=>{
            return(
                        
                        <div className="collection-item avatar" key={item.id}>
                            {/* <div className="item-img"> 
                                <img src={item.img} alt={item.img} className=""/>
                            </div> */}
                        
                            {/* <div className="item-desc">
                                <span className="title">{item.title}</span>
                                <p>{item.desc}</p>
                                <p><b>Price: {item.price}</b></p> 
                                <p>
                                    <b>Quantity: {item.quantity}</b> 
                                </p>
                                <div className="add-remove">
                                    <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(item.id)}}>arrow_drop_up</i></Link>
                                    <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.id)}}>arrow_drop_down</i></Link>
                                </div>
                                <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                            </div> */}
                            <Showcart {...this.props} item={item} OnClick={this.handleRemove} />
                        </div>
                    
                 
            )
        })
    ):

     (
        <p> </p>
     )
return(
    <div className="container">
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
                    
                    
                </div>
                
            </div>
 



        <div className="cart">
            <h5> </h5>
            <ul className="collection">
                {addedItems}
            </ul>
        </div> 
               
    </div>
)
}
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)