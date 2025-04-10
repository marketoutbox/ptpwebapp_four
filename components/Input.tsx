"use client"

export default function Input({ type = "text", placeholder, value, onChange, className = "", ...props }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-2 bg-blue-900/30 backdrop-blur-sm rounded-md text-blue-100 placeholder-blue-400/70 focus:outline-none focus:ring-1 focus:ring-yellow-400/50 focus:bg-blue-900/50 transition-all duration-200 ${className}`}
      {...props}
    />
  )
}
