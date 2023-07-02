import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: '--font-mont'
});

export const metadata = {
  title: 'Learning NextJs - Home'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <nav>
          <div>This is the nav component.</div>
        </nav>
        {children}
      </body>
    </html>
  )
}
