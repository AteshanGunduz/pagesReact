"use client"
import Link from "next/link"
import App from '@/components6/App';


export default function About() {
  return (
    <>
    <nav  className='navbar'>
          <ul>
          <li>
            <Link href="/">QuoteGenerator</Link>
            </li>
            <li>
            <Link href="/shop">ShoppingList</Link>
            </li>
            <li>
            <Link href="/cat">CatSlider</Link>
            </li>
            <li>
            <Link href="/fairtnt">FaitTntRenting</Link>
            </li>
            <li>
            <Link href="/user">UserSelecting</Link>
            </li>
            <li>
            <Link href="/video">VideoSwitcher</Link>
            </li>
          </ul>
        </nav>

        <div className="main">
        <App/>
      </div>
    </>
  )
}