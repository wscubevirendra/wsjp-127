import '../globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'

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
         <Toaster position="top-right" richColors />
      
        <main>{children}</main>
      
      </body>
   
    </html>
  )
}