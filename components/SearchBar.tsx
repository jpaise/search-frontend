'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/results?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="flex w-full">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your search query"
        className="flex-grow rounded-l-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-r-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none"
      >
        Search
      </button>
    </form>
  )
}
