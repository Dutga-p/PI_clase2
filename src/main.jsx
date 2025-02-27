import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/home/Home.jsx'
import { Quiz } from './pages/quiz/Quiz.jsx'
import { NotFound } from './pages/not-found/NotFound.jsx'
import { Heart } from './pages/heart/Heart.jsx'
import { HighBloodPressure } from './pages/heart/high-blood-pressure/HighBloodPressure.jsx'
import { LowBloodPressure } from './pages/heart/low-blood-pressure/LowBloodPressure.jsx'
import {BrowserRouter, Route,Routes } from 'react-router'
import { Layout } from './layout/Layout.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/>  
        <Route path='quiz' element={<Quiz/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='corazon' element={<Heart/>}>
          <Route path='presion-alta' element={<HighBloodPressure/>}/>
          <Route path=' presion-baja' element={<LowBloodPressure/>}/>
        </Route>
      </Routes>
    </Layout>
  </BrowserRouter>
)
