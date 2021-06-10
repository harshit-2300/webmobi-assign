import React from 'react'
import '../App.css'
import {Left_sidebardata} from './Left_sidebardata'
import Logo from '@material-ui/icons/AcUnit';
import EventsIcon from '@material-ui/icons/Assessment';
import TeamsIcon from '@material-ui/icons/Group';
import AnalyticsIcon from '@material-ui/icons/Timeline';
import ResultsIcon from '@material-ui/icons/Drafts';
const Left_sidebar= () => {
    return (
      
           <div className="Left_sidebar"> 
                
                        <div id="logo"> <Logo color="primary" style={{ fontSize: 50 }} /> </div>
                 
                        <ul className="sidebarList">
                        <li  className="row" >
                        <div id="icon"> <EventsIcon/> </div> 
                         <div id="title">Events</div>
                        </li>
                        
                        <li  className="row" >
                        <div id="icon"> <TeamsIcon color="secondary"/> </div> 
                         <div id="title">Teams</div>
                        </li>
                        
                        <li  className="row" >
                        <div id="icon"> <AnalyticsIcon color="disabled" /> </div> 
                         <div id="title">Analytics</div>
                        </li>
                        
                        <li  className="row" >
                        <div id="icon"> <ResultsIcon color="disabled" /> </div> 
                         <div id="title">Results</div>
                        </li>
                        </ul>
            </div>
         
    )
}

export default Left_sidebar;
