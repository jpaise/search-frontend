import { Suspense } from 'react'
import { useSearchParams } from 'react-router-dom'
import TopSearchBar from '../components/TopSearchBar'
import ResultsList from '../components/ResultsList'
import { mockSearchResults } from '../mocks/searchResults'

// Create a separate component for the content that uses useSearchParams
function ResultsContent() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const results = mockSearchResults

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8">
        <TopSearchBar initialQuery={query} />
      </div>
      <ResultsList results={results} />
    </div>
  )
}

// Main page component with Suspense boundary
export default function Results() {
  return (
    <main className="min-h-screen bg-white p-8">
      <Suspense fallback={
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <TopSearchBar initialQuery="" />
          </div>
          <div>Loading...</div>
        </div>
      }>
        <ResultsContent />
      </Suspense>
    </main>
  )
}
