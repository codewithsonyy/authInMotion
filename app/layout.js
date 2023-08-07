
import './globals.css'
import { NextAuthProvider } from './Providers'
export const metadata = {
  title: 'AuthInMotion',
  description: 'Next.js 13 app router based jwt authenticatiion',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" hero-gradientbody h-screen">
        <NextAuthProvider>
        <div className="max-w-5xl mx-auto ">
        {children}</div>
        </NextAuthProvider></body>
    </html>
  )
}
