import React from 'react'
import '../App.css'
import './Dash.css'
import Switch from './Switch'
import ForumIcon from '@material-ui/icons/Forum';
import BasicButtonGroup from './BasicButtonGroup';
import  Button  from './Button';
const Details= () => {
    return (
           
           <div className="Detailing">
               
               
                          <div className="Details-head">
                          
                          <div className="head" > <ForumIcon /> Audience Q&A</div>
                          <div><Switch  /></div>
                          </div>


               
               <ul className="Details">
                        
                         
                         <li  className="row" id="" >
                          
                          <div id="title">Moderation </div>
                          <div><Switch /></div>
                          
                         </li>
  
                                               
                          <li  className="row" >
                          
                           <div id="title">Labels</div>
                           <div><Switch /></div>
                          </li>
                          
                          <li  className="row" >
                         
                           <div id="title">Downvotes</div>
                           <div><Switch /></div>
                          </li>
                          
                          <li  className="row" >
                         
                           <div id="title">Replies</div>
                           <div><Switch /></div>
                          </li>
                          
                          <li  className="row" >
                           <div id="title">Anonymous questions</div>
                           <div><Switch /></div>
                          </li>
  
                          <li  className="row" >
                         
                         <div id="title">Maximum question length 
                          
                           <BasicButtonGroup /> 
                        

                         </div>
                        
                        </li>

                        {/* <li  className="row" >
                         
                         
                         
                         <div className="buttons"><button className="select-button"></button>
                         <button className="select-button"></button>
                         <button className="select-button"></button> </div>


                         
                        
                        </li> */}
                        
                        <li  className="row" >
                         <div id="title">Close questions</div>
                         <div><Switch /></div>
                        </li>
                        
                         <div id="save"><Button /> </div> 
  
                          </ul>
                             
                            

           </div>
           
            
           

         
    )
}

export default Details;
