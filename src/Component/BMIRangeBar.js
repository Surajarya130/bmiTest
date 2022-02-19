import React from 'react'

function BMIRangeBar(props) {
    let customStyle = {
        left: props.pinVal
    }

    let inputValPassed = props.pinVal.slice(0, -2);
    let intVal = parseFloat(inputValPassed)/4;
    console.log(intVal, typeof intVal)  




    return (
    <>
        <div className="bmiBox">
        <h3 style={{textAlign:"center", height:"80px"}}>Mr. Puppy's BMI <br /> {props.pinVal ? props.pinVal.slice(0, -2) / 4 : '' }</h3>



{
    props.pinVal ?
    <div className="customMtr">
    <div className="bmiMarkPin" style={customStyle}>
    <div className='arrowMark'></div>
    </div>
    </div>             
    : 
    <div className="customMtr">

    </div>
}

            <div className="bmiRange">
                <div id='sect1' style={intVal <= 30.00 ? {backgroundColor:"red"} : {backgroundColor:"#555"} }> 
                    <span>Underweight</span>
                </div>

                <div id='sect2' style={intVal <= 90.00 && intVal > 30.00  ? {backgroundColor:"green"} : {backgroundColor:"#555"} }>
                    <span>Noraml</span>
                </div>

                <div id='sect3' style={intVal <= 120.00 && intVal > 90.00  ? {backgroundColor:"#b276f3"} : {backgroundColor:"#555"} }>
                    <span>Overweigth</span>
                </div>  
            </div>
        </div>
    </>
  )
}

export default BMIRangeBar

