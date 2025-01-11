import TopSearchBar from '../components/TopSearchBar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-24">
      <h1 className="mb-8 text-5xl font-bold text-blue-500">Search</h1>
      <div className="w-full max-w-2xl">
        <TopSearchBar initialQuery="" />
      </div>
    </main>
  )
}
