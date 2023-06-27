'use client'

import { forwardRef } from 'react'

import useLayoutStore from '@/store/useLayoutStore'
import { useStoreState } from '@/store/hooks'
import { cn } from '@/lib/utils'

type Props = React.HTMLAttributes<HTMLBodyElement>

const LayoutBody = forwardRef<HTMLBodyElement, Props>(({ className, children, ...props }, ref) => {
  const navExpand = useStoreState(useLayoutStore, (state) => state.navExpand)

  return (
    <body
      ref={ref}
      className={cn(
        'fixed grid h-screen w-screen grid-rows-layout overflow-hidden',
        navExpand ? 'grid-cols-layout-expand' : 'grid-cols-layout',
        'transition-all',
        className,
      )}
      {...props}
    >
      {children}
    </body>
  )
})
LayoutBody.displayName = 'LayoutBody'

export { LayoutBody }
