import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="font-sans relative  bg-gradient-to-br from-[#0d0c1b] via-[#131321] to-[#1a1a2e]">
      <div className="absolute top-1/2 z-1 right-[20%] w-[600px] h-[400px] bg-gradient-to-tr from-[#ff3b7b] via-[#ff6b3b] to-[#ff8942] opacity-[0.35] blur-[200px]  rounded-full pointer-events-none " />

      {/* Bottom Right Glow Blob */}
      <div className="absolute top-1/3  z-1 right-1/2  w-[600px] h-[400px] bg-gradient-to-tr from-[#4a54f1] via-[#6c6ce9] to-[#7f9df5] opacity-[0.35] blur-[200px]  rounded-full pointer-events-none " />
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
