import { Routes, Route, NavLink } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className="absolute top-0 left-0 w-full backdrop-blur-sm shadow p-4 z-50">
      <div className="container mx-auto flex justify-end items-center max-h-5">
        {/* Hamburger button for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 mr-2"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span className={`block h-1 w-6 bg-black my-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`block h-1 w-6 bg-black my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-1 w-6 bg-black my-1 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-3' : ''}`}></span>
        </button>
        {/* Navigation links */}
        <div className={`flex-col md:flex-row md:flex gap-6 ${menuOpen ? 'flex' : 'hidden'} md:flex bg-white border-2 border-gray-300 z-50 md:bg-transparent md:border-none absolute md:static top-16 right-4 md:top-0 md:right-0 rounded md:rounded-none p-4 md:p-0 justify-center items-center`}>
          <NavLink
            to="/"
            className={({ isActive }) => `bg-transparent font-semibold ${isActive ? 'text-gray-800 navbar-deco active' : 'text-gray-800 navbar-deco'}`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `bg-transparent font-semibold ${isActive ? 'text-gray-800 navbar-deco active' : 'text-gray-800 navbar-deco'}`}
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => `bg-transparent font-semibold ${isActive ? 'text-gray-800 navbar-deco active' : 'text-gray-800 navbar-deco'}`}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `bg-transparent font-semibold ${isActive ? 'text-gray-800 navbar-deco active' : 'text-gray-800 navbar-deco'}`}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

function App() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App
