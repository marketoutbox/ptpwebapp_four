"use client"

export default function Button({ children, onClick, disabled = false, primary = false, className = "" }) {
  const baseClasses = "btn px-4 py-2 rounded-md font-medium focus:outline-none transition-all duration-200"

  const variantClasses = primary
    ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-950 hover:shadow-glow disabled:from-yellow-400/50 disabled:to-yellow-500/50"
    : "bg-blue-800/50 hover:bg-blue-700/50 text-blue-100 hover:shadow-soft disabled:bg-blue-800/30 disabled:text-blue-200/50"

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${className} ${disabled ? "cursor-not-allowed opacity-70" : ""}`}
    >
      {children}
    </button>
  )
}
