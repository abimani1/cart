import React, { useEffect, useState } from 'react'
import {RecaptchaVerifier, signInWithPhoneNumber} from "firebase/auth";
import {auth} from "../../../config/firebase-config";
import FloatingLabelInput from '../../../components/FloatingLabelInput';
import '../../../asset/Style/signin.css'
import Otp from '../otp/otp';
import { CHECK_PHONE_NUMBER } from '../../../helper';
import { useLazyQuery } from '@apollo/client';
import toast, { Toaster } from 'react-hot-toast';

const SignIn = ({setSwitchLog, closeModal}) => {
    
  const [phoneNumber, setPhoneNumber] = useState("");
  const [user, setUser] = useState(null);
  const [confirmResult, setConfirmResult] = useState("");
  const [switchOtp, setSwitch] = useState(false)

  // Cheak the Phone Number is exist
  const [checkPhoneNumberExists, { loading, error, data }] = useLazyQuery(CHECK_PHONE_NUMBER);

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "sign-in-button", {
      size: "invisible",
    });
  }, [])

  const handleSendCode = async (event) => {
    event.preventDefault()
    checkPhoneNumberExists({ variables: { mobile: phoneNumber } }).then((res)=>{
        if(res?.data?.users?.length > 0){
          const appVerifier = window.recaptchaVerifier;
          signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((value) => {
              setConfirmResult(value);
              setSwitch(true)
            })
            .catch((error) => {
              toast.error(error);
              console.log(error);
          });
        }else{
          toast.error("Mobile Number not Resgister")
        }
      })
    // const appVerifier = window.recaptchaVerifier;
    // signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    //   .then((value) => {
    //     console.log(value);
    //     setConfirmResult(value);
    //     setSwitch(true)
    //   })
    //   .catch((error) => {
    //     alert("error :", error);
    //     console.log(error);
    //   });
  };

  const handleVerifyCode = async (otp) => {
    const verificationCode = otp.join('');
    try{
      let res = confirmResult?.confirm(verificationCode)
      closeModal()
    }catch(error){
      toast.error(error)
    }
  };

  return (
      <div>
        {!switchOtp ? 
        <div className="signIn-card">
          <div className="signIn-card-header">
            <h2>sign in</h2>
          </div>
          <div className="signIn-card-body">
            <form>
              <FloatingLabelInput label = "Mobile Number" type = "tel" onChange = {(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
              <button  onClick={(e) => handleSendCode(e)}>Send Code</button>
            </form>
          </div>
          <div className="signIn-card-footer">
            <p>Don't have an account? <button className='btn linkBtn' onClick={() => setSwitchLog(false)}>sign up</button></p>
          </div>
        </div>
        :
        <Otp handleVerifyCode = {handleVerifyCode} mobileNumber = {phoneNumber} setUser = {setUser}/>
        }
        <div id="sign-in-button"></div>
        <Toaster />
      </div>
  )
}

export default SignIn