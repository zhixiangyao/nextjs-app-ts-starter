'use client'

import type { RefObject } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

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

type Props = {
  className?: string
  ref?: RefObject<HTMLDivElement>
}

function Menu({ ref, className }: Props) {
  const pathname = usePathname()

  return (
    <div ref={ref} className={cn(className, 'flex-1 px-1')}>
      {menuData.map(v => (
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
}
Menu.displayName = 'Menu'

export { Menu }
