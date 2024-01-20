import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/landing/Landing'
import Works from './pages/works/Works'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Photography from './pages/Photography/Photography'
import Art from './pages/Art/Art'
import Styling from './pages/Styling/Styling'
import Design from './pages/Design/Design'
import Copyright from './pages/Copyright/Copyright'
import Privacy from './pages/Privacy/Privacy'
import Faq from './pages/Faq/Faq'
import Press from './pages/Press/Press'
import Film from './pages/film/Film'
import InnerArt from './pages/InnerArt/InnerArt'
import InnerStyle from './pages/InnerStyle/InnerStyle'
import InnerFashion from './pages/InnerFashion/InnerFashion'

function App() {

  return (
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/works' exact element={<Works />} />
            <Route path="/works/photography" element={<Photography />} />
            <Route path="/works/art" element={<Art />} />
            <Route path="/works/styling" element={<Styling />} />
            <Route path="/works/design" element={<Design />} />
          <Route path="/works/art/:id" element={<InnerArt />} />
          <Route path="/works/styling/:ids" element={<InnerStyle />} />
          <Route path="/works/design/:idf" element={<InnerFashion />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/film' element={<Film />} /> */}
          <Route path='/press' element={<Press />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/copyright' element={<Copyright />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/faq' element={<Faq />} />
        </Routes>
      </Router>
    )
  }
  
  export default App
  // <div>
  //   {/* <Landing /> */}
  //   <Hold />
  // </div>
  