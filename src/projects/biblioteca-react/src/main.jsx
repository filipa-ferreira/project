import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';

import App from './App'
import './index.css'
import store from './app/store';
import Home from './pages/Home';
import BookDashboard from './features/books/components/BookDashboard';
import About from './pages/About';
import NotFound from './pages/NotFound';
import BookDescription from './features/books/components/BookDescription';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store={store}>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Navigate to='/home' />}  />
            <Route path='/home' element={<Home />} />
            <Route path='/dashboard' element={<BookDashboard />} />
            <Route path='/description/:id' element={<BookDescription />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
          </Route>

        </Routes> 

      </BrowserRouter>
    </Provider>

  </React.StrictMode>,
)



