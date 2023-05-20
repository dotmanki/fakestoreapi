'use client'
import React, { useEffect, useState } from 'react'
import { routes } from '../../shared/constants'
import './Navbar.css'
import { CgDarkMode } from 'react-icons/cg'

const Navbar = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      isDark ? 'dark' : 'light'
    )
  }, [isDark])

  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li key={route.path}>
            <a href={route.path}>{route.label}</a>
          </li>
        ))}
        <li className="theme-switcher">
          <button>
            <CgDarkMode
              size={24}
              onClick={() => setIsDark(!isDark)}
            />
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
