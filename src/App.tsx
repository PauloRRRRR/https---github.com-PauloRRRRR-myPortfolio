import '../src/styles/main.css'
import Contacts from './components/Contacts'
import Header from './components/Header'
import Home from './components/Home'
import Navbar from './components/Navbar'

export function App() {
  return (
    <div className='bg-bege-100' >
      <Navbar/>
      <Header/>
      <Home/>
      <Contacts/>
    </div>
  )
}
