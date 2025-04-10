export default function Card({ title, children, className = "" }) {
  return (
    <div className={`glass rounded-xl shadow-lg ${className}`}>
      {title && (
        <div className="px-6 py-4 border-b border-blue-800/30">
          <h3 className="text-lg font-medium text-blue-100">{title}</h3>
        </div>
      )}
      <div className="px-6 py-4">{children}</div>
    </div>
  )
}
