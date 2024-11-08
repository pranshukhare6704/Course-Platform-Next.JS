'use client'

export default function Button({ children, className = '', ...props }) {
  const baseStyles = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'
  const defaultStyles = 'bg-green-500 text-white hover:bg-green-600'
  
  return (
    <button 
      className={`${baseStyles} ${className || defaultStyles}`}
      {...props}
    >
      {children}
    </button>
  )
}