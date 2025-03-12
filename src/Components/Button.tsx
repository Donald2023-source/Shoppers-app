import React from 'react'
import { twMerge } from 'tailwind-merge';

interface Props {
    children: React.ReactNode;
    className?: string,
    disabled?: boolean
    onClick?: any
}
const Button = ({ children, className, onClick, disabled}: Props) => {
  return (
    <button onClick={onClick} disabled={disabled} className={twMerge('bg-orange-400 text-base text-white hover:text-orange-600 hoverEffect md:px-8 px-4 py-3 rounded-full font-semibold cursor-pointer', className)}>{children}</button>
  )
}

export default Button
