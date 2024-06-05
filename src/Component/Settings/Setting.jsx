import * as React from 'react';
import Buttons from '../Button';
import "./Settings.css"
export default function Settings() {
    return (

      <div className="Main">

      <h1>Settings</h1>
      <div className="btn">

        <ul>
          <li><Buttons content="Account"/></li>
          <li><Buttons content="Notification"/></li>
          <li><Buttons content="Password"/></li>
          <li><Buttons content="Integration"/></li>
          <li><Buttons content="Socail Profiles"/></li>
          <li><Buttons content="LogOut"/></li>
         </ul>
      </div>
      </div>
    );
  
  

}
