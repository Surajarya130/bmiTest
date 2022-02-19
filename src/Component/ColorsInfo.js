import React from 'react'

function ColorsInfo() {
  return (
    <>
        <div className="colorsBlock">
            <h4>* BMI range accepts from 0 to 120</h4>
            <hr />
            <h4>Color Standards</h4>
            <div className="colorStd">
                <div className="red">   
                    <p>Underweight</p>
                </div>
                <div className="green">
                    <p>Normal</p>
                </div>
                <div className="pinkish">
                    <p>Overweight</p>
                </div>   
            </div>
            
        </div>
    
    </>
  )
}

export default ColorsInfo