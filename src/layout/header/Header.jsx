import React from 'react'
import { NavLink } from 'react-router'

export const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to='/' end>Inicio</NavLink>
        <NavLink to='/quiz' end>Quiz</NavLink>
      </nav>
    </header>
  )
}
