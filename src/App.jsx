import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Technologies from "./components/Technologies"
import Experience from "./components/Experience"
import Competition from "./components/Competition"
import Contacts from "./components/Contacts"
function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300">

      <div className="fixed top-0 -z-10 h-full w-full"> 
        <div className="absolute top-0 z-[-2] h-full w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        </div>
      </div>
     
      <Navbar/>
      <Hero/>
      <About/>
      <Technologies/>
      <Experience/>
      <Competition/>
      <Contacts/>
    </div>
  )
}

export default App