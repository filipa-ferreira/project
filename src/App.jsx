
import { Outlet } from 'react-router-dom'
import './App.css'

import Header from './features/components/Header'
import Footer from './pages/Footer'


function App() {
  
  return (
    <section className="App">
      <Header/>
        <section className='content-container'>
        <Outlet/>
        </section>
      <Footer/>
    </section>
  )
}

export default App
