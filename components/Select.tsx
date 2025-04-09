"use client"

export default function Select({ value, onChange, children, className = "", ...props }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-2 bg-blue-900/30 backdrop-blur-sm border border-blue-800/20 rounded-md text-blue-100 focus:border-blue-600/50 focus:ring-0 transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </select>
  )
}
