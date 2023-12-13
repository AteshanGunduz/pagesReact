"use client"
import React from 'react';
import Link from 'next/link';
import App from '@/components/App';


export default function Home() {
  return (
    <main>
      <nav  className='navbar'>
          <ul>
          <li>
            <Link href="/">QuoteGenerator </Link>
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
    </main>
  );
}