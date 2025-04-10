"use client"

export default function Button({ children, onClick, disabled = false, primary = false, className = "" }) {
  const baseClasses =
    "px-4 py-2 rounded-md font-medium focus:outline-none transition-all duration-200 shadow-md hover:shadow-lg"

  const variantClasses = primary
    ? "bg-gradient-to-r from-yellow-400 to-yellow-300 hover:from-yellow-300 hover:to-yellow-400 text-blue-900 disabled:opacity-50 disabled:from-yellow-400/50 disabled:to-yellow-300/50"
    : "bg-blue-800/50 hover:bg-blue-700/50 text-blue-100 disabled:bg-blue-800/30 disabled:text-blue-200/50"

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${className} ${disabled ? "cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  )
}
