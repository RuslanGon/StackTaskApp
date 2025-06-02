import React from 'react'
import clsx from 'clsx'

const Button = ({icon, className, label, type, onClick = () => {}}) => {
  return (
<button type={type || 'button'} className={clsx('px-3 py-2 outline-none rounded-2xl cursor-pointer', className)}>
    <span>{label}</span>
    {icon && icon}
    </button>
  )
}

export default Button