import React, { Component } from 'react'

 class footer extends Component {
    render() {
        return (
            <div>
                <div className="row" style={{paddingTop:"40px"}}> </div> 
                <div className="row">
                <img  height="" width="100%" src={process.env.PUBLIC_URL + '/images/footer.png' } alt=""/>
                </div>
            </div>
        )
    }
}
export default footer;
