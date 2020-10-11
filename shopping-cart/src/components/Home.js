import React, { Component } from 'react';
import ShowPhoto from './ShowPosts';
import {Link} from 'react-router-dom';
import Posts2 from './Posts2';

 class Home extends Component {
    render() {
        return (
            <div className="container">
                    <div className="row">  
                    <div className="row" style={{paddingTop:"120px"}}> </div>                 
                     <div className="pic col-md-6">
                        <img className="pic1" height="400px" width="450px" src={process.env.PUBLIC_URL + '/images/Group.png' } alt=""/>
                        <img className="pic2" height="50px" width="40px" src={process.env.PUBLIC_URL + '/images/prev-btn.png' } alt=""/>
                        <img className="pic3" height="50px" width="40px" src={process.env.PUBLIC_URL + '/images/next-btn.png' } alt=""/>

                        </div>
                        <div className="text col-md-6">
                            Custom Frames to Tell<br></br> Your Unique Story
                            <div className="row">
                         <div className="col-md-2">
                            <div className="text3"></div>
                         </div>
                         
                     <div className="text2 col-md-8">
                     We make it simple, hassle-free and affordable <br/> for you to share your story with custom <br/> frames!
                     </div>
                     <div className="col-md-2">
                            <div className='fb' style={{writingMode: 'tb-rl'}}>Facebook</div>
                            {/* <div style={{writingMode: 'tb-rl'}}>Instagram</div>
                            <div style={{writingMode: 'tb-rl'}}>Twitter</div> */}
                         </div>

                     </div>
                     <div className="row">
                         <div className="col-md-6">
                           <a href="">  <img height="48px" width="195px" src={process.env.PUBLIC_URL + '/images/start-farming-btn.png' } alt=""/></a>
                         </div>
                         <div className="col-md-6"></div>
                     </div>

                     
                     
                     </div>
                  
                     
                   
                    
                    </div>
                    <div className="row" style={{paddingTop:"120px"}}> </div> 
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 text20">
                        What You Wish To Frame?
                        <hr style ={{width:'50%'}}/>
                        </div>
                        
                        <div className="col-md-4"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 text21">
                        Customize your frame to fit artworks, photos and many more!
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                            <div className="row">
                             <ShowPhoto posts={this.props.posts}  />
                             
                            
                            </div>
                            <div className="row" style={{paddingTop:"60px"}}> </div> 
                            <div className="row">
                                <Posts2  items2={this.props.items2} />
                            

                            
                            </div>
                            <div className="row" style={{paddingTop:"80px"}}> </div> 
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 text20">
                        Custom Framing step
                        <hr style ={{width:'50%'}}/>
                        </div>
                        
                        <div className="col-md-4"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 text21">
                        True custom Framing made Truely Simple
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"> <span className="pictxt">Range of Custom Framing Choices</span><img style={{zIndex:1}} height="499px" width="390px" src={process.env.PUBLIC_URL + '/images/custom-framing-img1.png' }  alt=""/></div>
                        <div className="col-md-4"><span style={{paddingLeft:"15px"}} className="pictxt">Upload Your Image or Photo</span><img style={{zIndex:1}} height="499px" width="390px" src={process.env.PUBLIC_URL + '/images/custom-framing-img2.png' }  alt=""/></div>
                        <div className="col-md-4"><span style={{paddingLeft:"15px"}} className="pictxt">Range of Custom Framing Choices</span><img style={{zIndex:1}} height="499px" width="390px" src={process.env.PUBLIC_URL + '/images/custom-framing-img3.png' }  alt=""/></div>
                    </div>
                    <div className="row" style={{paddingTop:"40px"}}> </div>
                    <div className="row">
                    <div  className="col-md-4 text100">Select Your Frame</div>
                    <div className="col-md-4 text100">Upload your photo or <br/> Artwork and send</div>
                    <div className="col-md-4 text100">We build custom frame and <br/> ship to you</div>
                    </div>
                    <div className="row" style={{paddingTop:"40px"}}> </div>
                    <div className="row" > 
                    <div className="col-md-4"></div>
                    <div className="col-md-4"><a href="">  <img height="48px" width="195px"  style={{marginLeft:"30px"}}src={process.env.PUBLIC_URL + '/images/start-farming-btn.png' } alt=""/></a> </div>
                    <div className="col-md-4"></div>
                    
                    
                    </div>
                    <div className="row" style={{paddingTop:"60px"}}> </div> 
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 text20">
                         Our Impressive Works
                        <hr style ={{width:'50%'}}/>
                        </div>
                        
                        <div className="col-md-4"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 text21">
                        Design a custom frame for photos
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-6"><a href="">  <img height="448px" width="395px"  style={{marginLeft:"30px"}}src={process.env.PUBLIC_URL + '/images/Component 84 – 1.png' } alt=""/></a></div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6"><a href="">  <img height="178px" width="255px"  style={{marginLeft:"30px"}}src={process.env.PUBLIC_URL + '/images/impressive7.png' } alt=""/></a></div>
                                <div className="col-md-6"><a href="">  <img height="178px" width="255px"  style={{marginLeft:"30px"}}src={process.env.PUBLIC_URL + '/images/Component 82 – 1.png' } alt=""/></a></div>
                            </div>
                            <div className="row"><a href="">  <img height="242px" width="585px"  style={{marginLeft:"30px"}}src={process.env.PUBLIC_URL + '/images/Component 83 – 1.png' } alt=""/></a></div>
                        </div>
                    </div>
                    <div className="row" style={{paddingTop:"60px"}}> </div>  
                           <div className="row">
                           <div className="col-md-6">
                               <div className="row"><span className="boss">Why Choose Frame Boss</span></div>
                               <div className="row"><span>we promise to provide you with the simplest and <br/> 
                               most affordable way to design custom frames with care!</span></div>
                               <div className="row" style={{paddingTop:"40px"}}> </div> 
                               <div className="row">
                                   <div className="col-md-3">
                                   <img className="pic1" height="40px" width="40px" src={process.env.PUBLIC_URL + '/images/free-shipping-icon.png' } alt=""/>

                                   </div>
                                   <div className="col-md-3">
                                   <span>we promise to provide you with the simplest</span>
                                       
                                   </div>
                                   <div className="col-md-3">
                                   <img className="pic1" height="40px" width="40px" src={process.env.PUBLIC_URL + '/images/free-shipping-icon.png' } alt=""/>

                                   </div>
                                   <div className="col-md-3">
                                   <span style={{textAlign:"left"}}>we promise to provide you with the simplest</span>
                                       
                                   </div>
                               </div>
                               <div className="row">
                                   <div className="col-md-3">
                                   <img className="pic1" height="40px" width="40px" src={process.env.PUBLIC_URL + '/images/free-shipping-icon.png' } alt=""/>

                                   </div>
                                   <div className="col-md-3">
                                   <span>we promise to provide you with the simplest</span>
                                       
                                   </div>
                                   <div className="col-md-3">
                                   <img className="pic1" height="40px" width="40px" src={process.env.PUBLIC_URL + '/images/free-shipping-icon.png' } alt=""/>

                                   </div>
                                   <div className="col-md-3">
                                   <span style={{textAlign:"left"}}>we promise to provide you with the simplest</span>
                                       
                                   </div>
                               </div>

                           </div>
                           <div className="col-md-6">
                           <img style={{marginLeft:'120px'}} className="pic1" height="400px" width="450px" src={process.env.PUBLIC_URL + '/images/Group.png' } alt=""/>
                                   
                           </div>
                               
                            </div> 
                           
                     `
            </div>
        )
    }
}
export default Home