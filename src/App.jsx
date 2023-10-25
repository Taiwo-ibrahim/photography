import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hold from './pages/hold/Hold'
import Landing from './pages/landing/Landing'
import Works from './pages/works/Works'
import About from './pages/about/About'
import Press from './pages/press/Press'
import Contact from './pages/contact/Contact'

function App() {

  return (
      <div>
        {/* <Landing /> */}
        <Hold />
      </div>
    )
  }
  
  export default App
  
  // <Router>
  //   <Routes>
  //     <Route path='/' element={<Landing />} />
  //     <Route path='/my-works' element={<Works />} />
  //     <Route path='/about-me' element={<About />} />
  //     <Route path='/press' element={<Press />} />
  //     <Route path='/contact-me' element={<Contact />} />
  //   </Routes>
  // </Router>