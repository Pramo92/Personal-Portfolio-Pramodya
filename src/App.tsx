import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About"
import Technologies from "./components/Technologies";
import Projects  from "./components/Projects";
import Contact  from "./components/Contact";

const App = () => {
  return (
    
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-100 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full bg-[#001620]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#0a0f29,transparent)]"></div>
      </div>
      <div className="container mx-auto px-8 relative z-10">
      <Navbar/>
      <Hero/>
      <About/>
      <Technologies/>
      <Projects/>
      <Contact/>
      </div>
    </div>
  )
}

export default App
