import React from 'react'
import '../App.css'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ForumIcon from '@material-ui/icons/Forum';import AnalyticsIcon from '@material-ui/icons/Timeline';
import SettingsIcon from '@material-ui/icons/Settings';
const Right_sidebar= () => {
    return (
      
           <div className="Left_sidebar"> 
                        <ul className="sidebarList">
                        <li  className="row_right" >
                        <div id="icon"> <AccountBoxIcon  /> </div> 
                        </li>

                        <li  className="row_right" >
                        <div id="icon"> <NotificationsIcon/> </div> 
                        </li>
                 
                        <li  className="row_right" >
                        <div id="icon"> <ForumIcon color="secondary"/> </div> 
                        </li>
                        
                        <li  className="row_right" >
                        <div id="icon"> <SettingsIcon color="disabled" /> </div> 
                        </li> 
                        </ul>
            </div>
         
    )
}

export default Right_sidebar;
