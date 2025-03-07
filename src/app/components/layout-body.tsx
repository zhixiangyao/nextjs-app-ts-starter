'use client'

import type { PropsWithChildren, RefObject } from 'react'

import { cn } from '@/lib/utils'
import { useStoreState } from '@/store/hooks'
import useLayoutStore from '@/store/useLayoutStore'

type Props = PropsWithChildren<{
  className?: string
  ref?: RefObject<HTMLBodyElement>
}>

function LayoutBody({ ref, className, children }: Props) {
  const navExpand = useStoreState(useLayoutStore, state => state.navExpand)

  return (
    <body
      ref={ref}
      className={cn(
        'fixed grid h-screen w-screen grid-rows-layout overflow-hidden',
        navExpand ? 'grid-cols-layout-expand' : 'grid-cols-layout',
        'transition-all',
        className,
      )}
    >
      {children}
    </body>
  )
}
LayoutBody.displayName = 'LayoutBody'

export { LayoutBody }
