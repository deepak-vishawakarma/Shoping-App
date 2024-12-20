import React from 'react'

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
      <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
      <form>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 mb-4"
        >
          Login
        </button>
      </form>
      <div className="text-center">
        <p className="text-sm text-gray-600 mb-2">Don't have an account?</p>
        <button
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
        >
          Sign Up
        </button>
      </div>
    </div>
  </div>
  )
}
