import '../globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@website/layout/Navbar'
import Footer from '@website/layout/Navbar'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const metadata = {
  title: 'Nestro — Curated Furniture',
  description: 'Scandinavian-inspired furniture for modern living.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-[#F8F5F1]`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}