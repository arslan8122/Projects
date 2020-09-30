import React, { Component } from 'react'
import Course  from './Course';
 class Coursesales extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              total:0
         };
         this.sumPrice=this.sumPrice.bind(this);
     }
     sumPrice(Price){
         this.setState({total:this.state.total+Price})
     }
     
    render() {
        var courses=this.props.items.map((item,index)=>{
            return <Course name={item.name} price={item.price} sumPrice={this.sumPrice} key={index}
                active={item.active} />
        })
        return (

            <div>
                  <h1>You can Buy Courses :</h1>   
                  <div id='courses'>
                      {courses}
        <p id='total'>Total : <b>{this.state.total}</b></p>
                    </div>        
             </div>
        )
    }
}
export default Coursesales