import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import NavigationBar from "@/components/navigation-bar/NavigationBar";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Target Image',
  description: 'Description',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body>
      <div className="flex flex-row">
        <NavigationBar/>
        {children}
      </div>
      </body>
      </html>
  )
}
