import React from 'react'
import '../App.css'
import './Dash.css'

const Details= () => {
    return (
           
           <div className="">
               
               
               <ul className="Details">
               <li  className="row" id="head" >
                          
                          <div id="title" >Audience Q&A</div>
                         </li>
                         
                         <li  className="row" id="" >
                          
                          <div id="title">Moderation</div>
                          
                         </li>
  
                                               
                          <li  className="row" >
                          
                           <div id="title">Labels</div>
                          </li>
                          
                          <li  className="row" >
                         
                           <div id="title">Downvotes</div>
                          </li>
                          
                          <li  className="row" >
                         
                           <div id="title">Replies</div>
                          </li>
                          
                          <li  className="row" >
                           <div id="title">Anonymous questions</div>
                          </li>
  
                          <li  className="row" >
                         
                         <div id="title">Maximum question length 
                         
                        

                         </div>
                        
                        </li>

                        {/* <li  className="row" >
                         
                         
                         
                         <div className="buttons"><button className="select-button"></button>
                         <button className="select-button"></button>
                         <button className="select-button"></button> </div>


                         
                        
                        </li> */}
                        
                        <li  className="row" >
                       
                         <div id="title">Close questions</div>
                        </li>
                        
                       
  
                          </ul>


           </div>
           
            
           

         
    )
}

export default Details;
