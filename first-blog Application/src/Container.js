import React, { Component } from 'react';
import Postperview from './Postperview';
 class Container extends Component {
    render() {
        return (
            <div>
                  <div className="container">
    <div className="row">
      <div className="col-lg-8 col-md-10 mx-auto">
      <Postperview/>
        <hr/>
        <Postperview/>
        <hr/>
        <Postperview/>
        <hr/>
        <Postperview/>
        <hr/>
     
        <div className="clearfix">
          <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
        </div>
      </div>
    </div>
  </div>

  <hr/>
            </div>
        )
    }
}

export default Container;