import React from "react"
import Styles from "./Navbar.module.css"
import Link from "next/link"
import { users } from "./Card"

function Navbar({ uid }) {
  return (
    <nav className={Styles.nav2}>
      <div className={Styles.nav__wrapper}>
        <Link href="/">
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.221 20.9159L12.0814 22.0555C11.5988 22.538 10.8185 22.538 10.3411 22.0555L0.361902 12.0814C-0.120634 11.5988 -0.120634 10.8185 0.361902 10.3411L10.3411 0.361902C10.8237 -0.120634 11.604 -0.120634 12.0814 0.361902L13.221 1.50151C13.7086 1.98918 13.6984 2.78485 13.2004 3.26225L7.01473 9.15534H21.768C22.4507 9.15534 23 9.70461 23 10.3873V12.03C23 12.7128 22.4507 13.262 21.768 13.262H7.01473L13.2004 19.1551C13.7035 19.6325 13.7138 20.4282 13.221 20.9159Z"
              fill="white"
            />
          </svg>
        </Link>
        <figure>D</figure>
        <h4>{users[uid].name}</h4>
      </div>
    </nav>
  )
}

export default Navbar
