import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hold from './pages/hold/Hold'
import Landing from './pages/landing/Landing'
import Works from './pages/works/Works'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Photography from './pages/Photography/Photography'
import Art from './pages/Art/Art'
import Styling from './pages/Styling/Styling'
import Design from './pages/Design/Design'
import Copyright from './pages/Copyright/Copyright'
import Privacy from './pages/Privacy/Privacy'
import Faq from './pages/Faq/Faq'
import Film from './pages/film/Film'

function App() {

  return (
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/works' element={<Works />} >
            <Route path="photography" element={<Photography />} />
            <Route path="art" element={<Art />} />
            <Route path="styling" element={<Styling />} />
            <Route path="design" element={<Design />} />
          </Route>
          <Route path='/about' element={<About />} />
          <Route path='/film' element={<Film />} />
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
  