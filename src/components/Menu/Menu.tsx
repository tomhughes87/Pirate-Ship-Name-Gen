import React from 'react'
import './styles.css'

export default function Menu() {
  return (
    <label>
      <input type="checkbox"/>
      <span className="menu"> <span className="hamburger"></span> </span>
            <ul>
                <li> <a href="#">Home</a> </li>
                <li> <a href="#">Just Gimme 100 Random Names!</a> </li>
                <li> <a href="#">About</a> </li>
            </ul>
     </label>
  )
}
