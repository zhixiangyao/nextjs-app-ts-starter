'use client'

import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

type Props = React.HTMLAttributes<HTMLElement>

const LayoutMain = forwardRef<HTMLElement, Props>(({ className, children, ...props }, ref) => {
  return (
    <main
      ref={ref}
      className={cn(
        'col-span-main row-span-main',
        'h-full overflow-y-auto overflow-x-hidden p-3.5',
      )}
      {...props}
    >
      {children}
    </main>
  )
})
LayoutMain.displayName = 'LayoutMain'

export { LayoutMain }
