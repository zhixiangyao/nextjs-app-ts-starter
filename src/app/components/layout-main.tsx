'use client'

import type { PropsWithChildren, RefObject } from 'react'

import { cn } from '@/lib/utils'

type Props = PropsWithChildren<{
  className?: string
  ref?: RefObject<HTMLElement>
}>

function LayoutMain({ ref, className, children }: Props) {
  return (
    <main
      ref={ref}
      className={cn('col-span-main row-span-main', 'h-full overflow-y-auto overflow-x-hidden p-3.5', className)}
    >
      {children}
    </main>
  )
}
LayoutMain.displayName = 'LayoutMain'

export { LayoutMain }
