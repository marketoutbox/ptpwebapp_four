"use client"

import Link from "next/link"
import { useRouter } from "next/router"

export default function Layout({ children }) {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-blue-900">
      <nav className="backdrop-blur-md bg-blue-900/20 border-b border-blue-800/20 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 group">
                <span className="text-yellow-400 font-bold text-xl relative group-hover:text-yellow-500 transition-colors">
                  PairTrade
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
              <div className="ml-10 flex items-baseline space-x-1">
                <NavLink href="/" current={router.pathname === "/"}>
                  Home
                </NavLink>
                <NavLink href="/stocks" current={router.pathname === "/stocks"}>
                  Stocks
                </NavLink>
                <NavLink href="/backtest" current={router.pathname === "/backtest"}>
                  Ratio Backtest
                </NavLink>
                <NavLink href="/backtest-spread" current={router.pathname === "/backtest-spread"}>
                  Spread Backtest
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
    </div>
  )
}

function NavLink({ href, current, children }) {
  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
        current ? "bg-blue-800/50 text-white shadow-inner" : "text-blue-100 hover:bg-blue-800/30 hover:text-white"
      }`}
    >
      {children}
    </Link>
  )
}
