import React from 'react'
import "./Links.css"
import Buttons from '../../Button'
function AccountLinks() {
  return (
    <div id="MainBox">
      <div id="txt">
        <h3>Linked Accounts</h3>
        <p>We use this to let you sign in and populate your profile information on our website</p>
      </div>
      <div className="MainBox2">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" alt="" /><label> Sign in with Google</label>
       <Buttons content="Connect"/>
      </div>
    </div>
  )
}

export default AccountLinks
