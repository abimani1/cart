import React, {useEffect, useState} from "react";
import "../../../asset/Style/signUp.css";
import {RecaptchaVerifier, signInWithPhoneNumber} from "firebase/auth";
import {auth} from "../../../config/firebase-config";
import FloatingLabelInput from "../../../components/FloatingLabelInput";
import Otp from "../otp/otp";
import toast, { Toaster } from "react-hot-toast";
import { useLazyQuery } from "@apollo/client";
import { CHECK_PHONE_NUMBER } from "../../../helper";

const SignUp = ({setSwitchLog, closeModal}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");
  const [confirmResult, setConfirmResult] = useState("");
  const [switchOtp, setSwitch] = useState(false)

  // Cheak the Mobile Number is exist
  const [checkPhoneNumberExists, { loading, error, data }] = useLazyQuery(CHECK_PHONE_NUMBER);

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "sign-in-button", {
      size: "invisible",
    });
  }, []);

  // const validatePhoneNumber = () =>{
  //   let regexp = /[0-9](\s|\S)(\d[0-9]{8,16})$/

  //   return regexp.test(phoneNumber)
  // }

  const handleSendCode = async (event) => {
    event.preventDefault()
    checkPhoneNumberExists({ variables: { mobile: phoneNumber } }).then((res)=>{
      
      if(res?.data?.users?.length > 0){
        toast.error('Phone Number Already Exists')
      }else{
        toast.success('Phone Number ')
        const appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, phoneNumber, appVerifier).then((value) => 
        {
          toast.success('OTP Send Successfly')
          setConfirmResult(value);
          setSwitch(true)
        })
        .catch((error) => {
          toast.error(error.message)
        });
      }
    })
    // if(validatePhoneNumber()){
    //   const appVerifier = window.recaptchaVerifier;
    //   signInWithPhoneNumber(auth, phoneNumber, appVerifier).then((value) => 
    //   {
    //     toast.success('OTP Send Successfly')
    //     setConfirmResult(value);
    //     setSwitch(true)
    //   })
    //   .catch((error) => {
    //     alert("error :", error);
    //     toast.success(error.message)
    //   });
    // }else{
    //   alert('Enter correct mobile Number')
    // }
  };

  // onChange function
  const onChangeUserName = (event) =>{
    let value = event.target.value
    setUserName(value)
  }
  
  const onChangeNubmer = (event) =>{
    let value = event.target.value
    if (/^[0-9+]*$/.test(value)) {
      setPhoneNumber(value)
    }
  }

  const handleVerifyCode = async (otp) => {
    const verificationCode = otp.join('');
    try{
      let res = confirmResult?.confirm(verificationCode)
      closeModal()
      toast.success('Login Successfully')
    }catch(error){
      toast.error(error)
    }
  };

  return (
    <div style={{display:'flex'}}>
      {!switchOtp ? 
        <div className="signUp-card">
          <div className="signUp-card-header">
            <p>sign up</p>
          </div>
          <div className="signup-card-body">
            <form>

              <FloatingLabelInput label="Enter Your Name" name = 'userName' type="text" onChange={(e) => onChangeUserName(e)} value={userName} />
              
              <FloatingLabelInput label="Mobile Number" name = 'mobile Number' type="tel" onChange={(e) => onChangeNubmer(e)} value={phoneNumber} />

              <div className="signUp-button">
                <button onClick={handleSendCode}>request otp</button>
              </div>
        
            </form>
          </div>
          <div className="signup-card-footer">
            <div>
              <p>Already have an account? <button className='btn linkBtn' onClick={() => setSwitchLog(true)}>sign In</button></p>
            </div>
          </div>
        </div>
        :
        <Otp handleVerifyCode = {handleVerifyCode} mobileNumber={phoneNumber} setUser = {setUser}/>
      }
      <div id="sign-in-button"></div>
      <Toaster />
    </div>
  );
};

export default SignUp;
