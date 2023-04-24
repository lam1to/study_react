import React from "react";
import classes from './MyInput.module.css'

const MyImport = React.forwardRef((props,ref) => {

    return(
        <input ref = {ref} className= {classes.myInp} {...props}/>
    );

});

export default MyImport;