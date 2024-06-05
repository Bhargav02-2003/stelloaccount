import React from 'react'
import Profile from './Profile/Profile'
import Forms from "./Form/Form"
import AccountLinks from './Links/AccountLinks'
import Delete from '../Delete/Delete'
import "./Account.css"
function Account() {
  return (
    <div className='Mains'>
            <div id="head">
                <h2>Account</h2>
            </div>
           <ul className='box'> 
           <li>  <Profile/></li>
           <li><Forms /></li>
           <li><AccountLinks/></li>
           <li><Delete/></li>
           </ul>
         
           
          

          

    </div>
  )
}

export default Account
