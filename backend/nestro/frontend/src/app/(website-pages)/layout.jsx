import '../globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@website/layout/Navbar'
import Footer from '@website/layout/Footer'
import StoreProvider from '@/redux/StoreProvider'
import { getProfile } from '@/utils/api'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const metadata = {
  title: 'Nestro — Curated Furniture',
  description: 'Scandinavian-inspired furniture for modern living.',
}

export default async function RootLayout({ children }) {

  let user = null;
  const response = await getProfile();
  if (response.success) {
    user = response.data
  }
  return (
    <html lang="en">
      <StoreProvider>
        <body className={`${inter.className} min-h-screen bg-[#F8F5F1]`}>
          <Navbar user={user} />
          <main>{children}</main>
          <Footer />
        </body>
      </StoreProvider>
    </html>
  )
}