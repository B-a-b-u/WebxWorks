import { Route, Routes } from "react-router-dom"
import Navbar from  "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Contact from './pages/Contact/Contact'
import NotFound from "./pages/404Page/NotFound";

const App = ()=>{
  return(
      <>
        <Navbar/>

        <main>
          <Home/>
          <About/>
          <Services/>
          <Contact/>

        </main>

        <Footer/>
      </>
  )
}

export default App
