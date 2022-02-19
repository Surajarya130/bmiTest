import React, { useState } from "react";
import BMIRangeBar from "./BMIRangeBar";
import Alert from "./Alert";


function InputBox() {
  let [numberVal, setNumberVal] = useState("");
  const [alert, setAlert] = useState(null)

  const showAlert = (message)=>{
      setAlert({
        msg:message,
      })
      setTimeout(() => {
        setAlert(null)
      }, 2000);
  }
   

  let handleChange = (e) => {
    setNumberVal(e.target.value);
    if (e.target.value > 120 || e.target.value < 0) {
      setNumberVal(""); 
      showAlert("Please Enter the values between 0 and 120") 
    }
      
    
  };





  return (
    <>
      <Alert alert={alert} />
      <div className="inputBox">
        <input
          type="number"
          placeholder="Enter number..."
          value={numberVal}
          onChange={handleChange}
        />

      </div>

      <BMIRangeBar  pinVal={ numberVal ? `${numberVal*4}px` : ''} />

    </>
  );
}

export default InputBox;
