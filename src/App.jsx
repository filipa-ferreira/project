
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './features/components/Footer'
import Header from './features/components/Header'



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
