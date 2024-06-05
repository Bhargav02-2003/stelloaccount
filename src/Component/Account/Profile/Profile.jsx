import React from 'react'
import "./Profile.css"
import Buttons from '../../Button'
function Profile() {
  return (
    <div className='main'>
      <div id="profile">
                    <img src="https://cdn-icons-png.freepik.com/512/4974/4974985.png" alt="imag"/>
                    <div id="Txt">
                    <h3>Rahul Nikam</h3>
                    <p>Hey,i'm Rahul Nikam a UI designer from india. I'm working in techonologies HTML,CSS,JavaScript,Backend,Adobe XD.</p>
                  
                    </div>
                    
                </div>
                <div id="btn">
                   <Buttons id="btn1" content="Upload"/>
                   <Buttons id="btn1" content="Edit Profile"/>
                   
                </div>
    </div>
  )
}

export default Profile
