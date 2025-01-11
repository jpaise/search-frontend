'use client'

import React,{ useState } from 'react'
import { SearchResult } from '@/types'

function truncateWords(text: string, limit: number): string {
  const words = text.split(' ')
  if (words.length <= limit) return text
  return words.slice(0, limit).join(' ') + '...'
}

export default function ResultsList({ results }: { results: SearchResult[] }) {
  const [expandedResults, setExpandedResults] = useState<Set<number>>(new Set())

  const toggleExpand = (id: number) => {
    setExpandedResults((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <ul className="space-y-8">
      {results.map((result) => {
        const isExpanded = expandedResults.has(result.id)
        const truncatedDescription = truncateWords(result.description, 100)
        const showMoreButton = result.description.split(' ').length > 100

        return (
          <li key={result.id}>
            <div className="group">
              <a href="#" className="text-xl text-blue-800 hover:underline">
                {result.title}
              </a>
              <p className="mt-1 text-sm text-green-700">
                https://example.com/result/{result.id}
              </p>
              <p className="mt-1 text-sm text-gray-600">
                {isExpanded ? result.description : truncatedDescription}
              </p>
              {showMoreButton && (
                <button
                  onClick={() => toggleExpand(result.id)}
                  className="mt-2 text-sm text-blue-600 hover:underline focus:outline-none"
                >
                  {isExpanded ? 'Show less' : 'Show more'}
                </button>
              )}
            </div>
          </li>
        )
      })}
    </ul>
  )
}
