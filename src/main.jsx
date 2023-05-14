import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux';
import store from './App/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import ContactForm from './features/components/ContactForm';
import SkillsDashboard from './features/components/skillsDashboard';
import SkillsDescription from './features/components/SkillsDescription';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<App/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/homepage' element={<HomePage/>}/>
          <Route path='/skillsDashboard' element={<SkillsDashboard/>}/>
          <Route path='/description/:id' element={<SkillsDescription/>}/>
          {/* falta portfolio */}
          <Route path='/contactForm' element={<ContactForm/>}/>
          <Route path='*' element={<NotFound/>}/>

        </Route>

       

      </Routes>

      </BrowserRouter>
      
    
    </Provider>
  </React.StrictMode>,
)
