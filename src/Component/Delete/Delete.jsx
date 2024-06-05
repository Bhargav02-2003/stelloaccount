import React from 'react'
import "./Delete.css"
import Buttons from '../Button'
function Delete() {
  return (
    <div className='Delete'>
       <h3>Delete Accounts</h3>
       <p>By deleting your Account you will lose all your Data.</p><label > <Buttons  content="Delete"/></label>
    </div>
  )
}

export default Delete;
