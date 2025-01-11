'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search, X } from 'lucide-react'

export default function TopSearchBar({ initialQuery }: { initialQuery: string }) {
  const [query, setQuery] = useState(initialQuery)
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/results?q=${encodeURIComponent(query)}`)
    }
  }

  const clearSearch = () => {
    setQuery('')
  }

  return (
    <form onSubmit={handleSearch} className="flex w-full max-w-xl items-center">
      <div className="relative flex-grow">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
          className="w-full rounded-full border border-gray-200 py-2 pl-4 pr-10 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-100"
        />
        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-8 top-0 mr-1 mt-2 text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        )}
        <button
          type="submit"
          className="absolute right-0 top-0 mr-3 mt-2 text-gray-400 hover:text-blue-500"
        >
          <Search className="h-5 w-5" />
        </button>
      </div>
    </form>
  )
}
