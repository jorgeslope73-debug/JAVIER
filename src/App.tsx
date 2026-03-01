import './App.css'
import Header from './sections/Header'
import Hero from './sections/Hero'
import NewsGrid from './sections/NewsGrid'
import BottomContent from './sections/BottomContent'
import InterviewBanner from './sections/InterviewBanner'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <NewsGrid />
        <BottomContent />
      </main>
      <InterviewBanner />
    </div>
  )
}

export default App
