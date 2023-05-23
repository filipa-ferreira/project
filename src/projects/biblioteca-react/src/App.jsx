import { Link, NavLink, Outlet } from 'react-router-dom';
import './App.css';

import BookDashboard from "./features/books/components/BookDashboard"


function App() {


  return (
    <div className="App">
      <h1>Biblioteca de JS</h1>
      <hr />
      <nav>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/dashboard'>Dashboard</NavLink>
        <NavLink to='/about'>About</NavLink>
      </nav>
      <hr />
      <Outlet />
      <hr />
      
    </div>
  )
}

export default App

