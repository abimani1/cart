import React, { useState } from 'react'
import SignUp from './signUp/signUp'
import SignIn from './signIn/signIn';

const AuthComponent = ({closeModal}) => {
  const [switchLog, setSwitchLog] = useState(false);

  return (
    <div>
        {!switchLog ? <SignUp closeModal = {closeModal} setSwitchLog = {setSwitchLog}/> : <SignIn closeModal = {closeModal} setSwitchLog = {setSwitchLog}/>}
    </div>
  )
}

export default AuthComponent