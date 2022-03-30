import React from 'react'
import classes from './MyButton.module.css'

const MyButton = ({children, ...props}) => {
  return (
    <button {...props} /* <- нужно чтобы передать остальные параметры */ className={classes}>
      {children /* это текст который есть в созданном компоненте в App */}
    </button>
  )
}

export default MyButton;