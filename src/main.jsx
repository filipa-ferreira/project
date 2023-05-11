import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux';
import store from './App/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactForm from './features/components/ContactForm';
import NotFound from './features/components/NotFound';
import SkillsDashboard from './features/components/SkillsDashboard';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>


      <BrowserRouter>

      <Routes>

        <Route path='/' element={<App/>} ></Route>

        <Route path='contactForm' element={<ContactForm/>}/>

        <Route path='skillsDashboard' element={<SkillsDashboard/>}/>

        <Route path='*' element={<NotFound/>}/>
        

      </Routes>

      </BrowserRouter>
      
    
    </Provider>
  </React.StrictMode>,
)
