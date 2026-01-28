import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div
      className="min-h-screen text-white bg-gradient-to-b from-[#020617] via-[#020617] to-black relative overflow-hidden"
      style={{ minHeight: '100vh', color: '#ffffff' }}
    >
      {/* Subtle background glow + grid */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        {/* Radial glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.18),_transparent_60%)]" />
        <div className="absolute bottom-[-30rem] right-[-10rem] w-[40rem] h-[40rem] bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.14),_transparent_60%)]" />
        {/* Soft grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.6)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(15,23,42,0.6)_1px,_transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10">
      <Navbar />

      {/* Single-page layout with scrollable sections */}
      <main>
        <Home />
        <About />
        <Work />
        <Gallery />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
      </div>
    </div>
  )
}

export default App
