import React from 'react'
import classes from './MyInput.module.css'

const MyInput = React.forwardRef((props, ref) => { //<- нужно для передачи ссылок (Ref)
  return (
    <input ref={ref} className={classes.myInput} {...props}/>
  )
});

export default MyInput