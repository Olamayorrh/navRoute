import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Notfound from './Components/Notfound'
import Setting from './Components/Setting'
import Form from './Components/Form'




function App() {


  return (
    <>
      <div>
       

        <BrowserRouter>

          <Routes>

              <Route path='/' element={<Home/>} />      
              <Route path="/about" element={<About/>} />
              <Route path="/setting" element={<Setting/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path='*' element={<Notfound/>} />
              
          </Routes>

        
        
        </BrowserRouter>

        <Form />

      
      </div>

      
    
      
    </>
  )
}

export default App
