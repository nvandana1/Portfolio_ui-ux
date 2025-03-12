import { useState } from 'react'
import './App.css'
import Navbar from './navbar/navbar'
import Home from './home/home'
import Projects from './projects/projects'
import Contact from './contact/contact'

function App() {
  const [activePage, updateActivePage] = useState('about')
  return (
    <>
    <Navbar updateActivePage={updateActivePage} activePage = {activePage}/>
    {
       activePage == 'about' && <Home updateActivePage={updateActivePage}/>
      }
       {
       activePage == 'projects' && <Projects/>
      }
      {
       activePage == 'contact' && <Contact/>
      }
      
    </>
  )
}

export default App
