import '../src/styles/main.css'
import Contacts from './components/Contacts'
import Experience from './components/Experience'
import Header from './components/Header'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'

export function App() {
  return (
    <div className='bg-bege-100' >
      <Navbar/>
      <Header/>
      <Home/>
      <Experience/>
      <Portfolio/>
      <Contacts/>
    </div>
  )
}
