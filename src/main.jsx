import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux';
import store from './app/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import ContactForm from './features/components/ContactForm';
import SkillsDescription from './features/components/SkillsDescription';
import About from './features/components/About';
import Portfolio from './features/components/Portfolio';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<App/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/homepage' element={<HomePage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/description/:id' element={<SkillsDescription/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/contactForm' element={<ContactForm/>}/>
          <Route path='*' element={<NotFound/>}/>

        </Route>

       

      </Routes>

      </BrowserRouter>
      
    
    </Provider>
  </React.StrictMode>,
)
