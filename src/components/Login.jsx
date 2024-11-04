/* eslint-disable no-unused-vars */
import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"

export default function LoginPage() {
  return (
    <div className="bg-gray-900 flex flex-col items-center justify-center relative overflow-hidden  w-screen min-h-screen">
      {/* Background food icons */}
      <div className="absolute inset-0 grid grid-cols-4 gap-4 p-4 opacity-10">
        {[...Array(32)].map((_, i) => (
          <FoodIcon key={i} />
        ))}
      </div>

      {/* Login/Signup buttons */}
      <div className="absolute top-4 right-4 flex space-x-2">
        <Link to={'/'}>
        <Button className="bg-green-500 text-white hover:bg-green-600">login</Button>
        </Link>
        <Link to={'/signup'}>
        <Button className="bg-green-500 text-white hover:bg-green-600">Signup</Button>
        </Link>

      </div>

      {/* Login Form */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md relative z-10">
        <div className="flex justify-center mb-6">
          <CherryLogo />
        </div>
        <h1 className="text-2xl font-bold text-center text-white mb-6">&quot;Hungry for More?&quot;</h1>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <Input 
            type="email" 
            placeholder="you@yourmail.com" 
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 mb-2"
          />
          <Link to={'/home'}>
          <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 ">
            Next <span aria-hidden="true">&gt;</span>
          </Button>
          </Link>
        </form>
        <div className="text-center mt-4">
          <Link to="/" className="text-sm text-gray-300 hover:text-white">Forgot password?</Link>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 43.3C1200 47 1320 53 1380 56.7L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="#22C55E"/>
        </svg>
      </div>
    </div>
  )
}

function CherryLogo() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="32" fill="#EF4444"/>
      <path d="M32 16C24.268 16 18 22.268 18 30C18 37.732 24.268 44 32 44C39.732 44 46 37.732 46 30C46 22.268 39.732 16 32 16ZM32 40C26.477 40 22 35.523 22 30C22 24.477 26.477 20 32 20C37.523 20 42 24.477 42 30C42 35.523 37.523 40 32 40Z" fill="#22C55E"/>
    </svg>
  )
}

function FoodIcon() {
  const icons = [
    "M3 3h18v18H3z M7 7h10v10H7z", // Burger
    "M4 4h16v16H4z M6 10h12v6H6z", // Fries
    "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z", // Ice cream
    "M3 13h18v8H3z M3 3h18v8H3z", // Sandwich
  ]
  const randomIcon = icons[Math.floor(Math.random() * icons.length)]
  
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-gray-700">
      <path d={randomIcon} />
    </svg>
  )
}
