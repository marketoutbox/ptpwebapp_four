export default function Card({ title, children, className = "" }) {
  return (
    <div className={`glass rounded-xl shadow-soft hover-lift ${className}`}>
      {title && (
        <div className="px-6 py-4 border-b border-blue-800/10">
          <h3 className="text-lg font-medium text-blue-50">{title}</h3>
        </div>
      )}
      <div className="px-6 py-5">{children}</div>
    </div>
  )
}
