import React from "react";

function Button({Colorname="none" , BtnText}){
    return(
       <>
       <button className={Colorname} >{BtnText}</button>
       </>
    )
}

export default Button