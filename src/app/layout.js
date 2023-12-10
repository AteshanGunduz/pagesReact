
import { Link } from 'react-router-dom'
import '../styles/globals.css'




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  )
}
