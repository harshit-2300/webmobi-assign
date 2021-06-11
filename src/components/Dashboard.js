import React from 'react'
import '../App.css'
import './Dash.css'
import Details from './Details'
import ShortTextIcon from '@material-ui/icons/ShortText';


const Dashboard= () => {
    return (
           
           <div className="dashboard">
               <div className=" TopBar">
                <ShortTextIcon style={{ fontSize: 70 }} />  
                <h1>Admin Dashboard</h1>
               </div>

            <div className="dash">
                    
                    <ul className="dashlist">
                         
                       <li  className="row " id="head" >
                        
                        <div id="title">Event settings</div>
                       </li>

                                             
                        <li  className="row op" >
                        
                         <div id="title">General</div>
                        </li>
                        
                        <li  className="row op" >
                       
                         <div id="title">Privacy</div>
                        </li>
                        
                        <li  className="row op" >
                       
                         <div id="title">Features</div>
                        </li>
                        
                        <li  className="row op" >
                         <div id="title">Customisation</div>
                        </li>

                        <li  className="row op" >
                       
                       <div id="title">Integration</div>
                      </li>
                      
                      <li  className="row op" >
                     
                       <div id="title">Session</div>
                      </li>
                      
                      <li  className="row op" >
                       <div id="title">My Plans</div>
                      </li>

                        </ul>
                    <div className="details">
                       
                      <Details />
                    </div>
            </div>


           </div>
           
            
           

         
    )
}

export default Dashboard;
