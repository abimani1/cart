import React, { useRef, useState } from 'react';
import { FaPencilAlt } from "react-icons/fa";
import '../../../asset/Style/otp.css';

const Otp = ({handleVerifyCode,mobileNumber, setUser }) => {
  const [otp, setOtp] = useState(Array(6).fill(''));
  const inputRefs = useRef(Array(6).fill(null));

  const handleInputChange = (e, index) => {
    const value = e.target.value;

    if (isNaN(value)) {
      return; // Allow only numeric input
    }

    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;
      return newOtp;
    });

    // Move to the next input field on digit input
    if (index < 6 - 1 && value !== '') {
      inputRefs.current[index + 1]?.focus();
    }

    // Move to the previous input field on backspace
    if (index > 0 && value === '' && e.nativeEvent.inputType === 'deleteContentBackward') {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleInputPaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text/plain').split('');

    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      pasteData.forEach((value, index) => {
        if (index < 6) {
          newOtp[index] = value;
        }
      });
      return newOtp;
    });
  };

  return (
    <div>
      <div className="otp-card">
        <div className="otp-card-header">
          <h3>Enter OTP</h3>
        </div>
        <div className="otp-card-body">
          <form>
            <div className="otp-session">
              <div className="otp-number">
                <p>OTP send to <b>{mobileNumber}</b> <FaPencilAlt className='pencilIcone'/></p>
              </div>
              <div className="otp-filed">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    name='otp'
                    className="otp-input"
                    value={digit}
                    onChange={(e) => handleInputChange(e, index)}
                    onPaste={handleInputPaste}
                    maxLength="1"
                  />
                ))}
              </div>
              <div className='otp-resend'>
                <button>send again</button>
              </div>
              <div className="otp-button">
                <button type="button" onClick={() => handleVerifyCode(otp)}>
                  Verify
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Otp;
