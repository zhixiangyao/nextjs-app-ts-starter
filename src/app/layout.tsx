import { Inter } from 'next/font/google'

import { LayoutBody } from './components/layout-body'
import { LayoutHeader } from './components/layout-header'
import { LayoutMain } from './components/layout-main'
import { LayoutNav } from './components/layout-nav'

import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <LayoutBody className={inter.className}>
        <LayoutNav />

        <LayoutHeader />

        <LayoutMain>{children}</LayoutMain>
      </LayoutBody>
    </html>
  )
}

export default Layout
