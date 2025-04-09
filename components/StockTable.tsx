export default function StockTable({ stocks }) {
  if (stocks.length === 0)
    return (
      <div className="text-center py-8">
        <p className="text-blue-200">No data available.</p>
      </div>
    )

  return (
    <div className="mt-6 overflow-hidden rounded-lg shadow-soft">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-blue-800/10 data-table">
          <thead className="bg-blue-900/30 backdrop-blur-sm">
            <tr>
              <th scope="col" className="text-left text-blue-200">
                Date
              </th>
              <th scope="col" className="text-left text-blue-200">
                Symbol
              </th>
              <th scope="col" className="text-left text-blue-200">
                Open
              </th>
              <th scope="col" className="text-left text-blue-200">
                High
              </th>
              <th scope="col" className="text-left text-blue-200">
                Low
              </th>
              <th scope="col" className="text-left text-blue-200">
                Close
              </th>
            </tr>
          </thead>
          <tbody className="bg-blue-900/20 backdrop-blur-sm divide-y divide-blue-800/10">
            {stocks.map((stock, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-blue-900/10" : "bg-blue-900/20"}>
                <td className="whitespace-nowrap text-sm text-blue-100">{stock.date}</td>
                <td className="whitespace-nowrap text-sm font-medium text-yellow-400">{stock.symbol}</td>
                <td className="whitespace-nowrap text-sm text-blue-100">{stock.open.toFixed(2)}</td>
                <td className="whitespace-nowrap text-sm text-blue-100">{stock.high.toFixed(2)}</td>
                <td className="whitespace-nowrap text-sm text-blue-100">{stock.low.toFixed(2)}</td>
                <td className="whitespace-nowrap text-sm text-blue-100">{stock.close.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
