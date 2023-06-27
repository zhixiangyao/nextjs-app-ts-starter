'use client'

import { forwardRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

type Props = Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>

const menuData = [
  {
    pathname: '/',
    name: 'Home',
  },
  {
    pathname: '/test-plan',
    name: 'Test Plan',
  },
]

const Menu = forwardRef<HTMLDivElement, Props>(({ className, ...props }, ref) => {
  const pathname = usePathname()

  return (
    <div ref={ref} className={cn(className, 'flex-1 px-1')} {...props}>
      {menuData.map((v) => (
        <Link key={v.pathname} href={v.pathname}>
          <Button
            variant="link"
            className={cn(
              'w-full justify-center whitespace-nowrap rounded-none transition-all',
              v.pathname === pathname ? 'text-white' : 'text-gray-400',
            )}
          >
            {v.name}
          </Button>
        </Link>
      ))}
    </div>
  )
})
Menu.displayName = 'Menu'

export { Menu }
