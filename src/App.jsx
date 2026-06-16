import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Cursor from './components/Cursor/Cursor'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ProjectDetail from './pages/ProjectDetail/ProjectDetail'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'


function Layout() {
  const isMobile = window.innerWidth <= 768
  const location = useLocation()
  const hideNav = isMobile ? false : location.pathname.startsWith('/projects')
  const hideFooter = location.pathname === '/projects'

  return (
    <>
      <Cursor />
      {!hideNav && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {!hideFooter && <Footer />}    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  )
}

export default App