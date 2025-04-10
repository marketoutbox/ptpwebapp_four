"use client"

export default function Select({ value, onChange, children, className = "", ...props }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-2 bg-blue-900/30 backdrop-blur-sm rounded-md text-blue-100 focus:outline-none focus:ring-1 focus:ring-yellow-400/50 focus:bg-blue-900/50 transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </select>
  )
}
