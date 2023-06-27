'use client'

import { Fragment, forwardRef } from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegments } from 'next/navigation'

import { cn, stringCapitalization } from '@/lib/utils'

type Props = React.HTMLAttributes<HTMLElement>

const LayoutHeader = forwardRef<HTMLElement, Props>(({ className, children, ...props }, ref) => {
  const segments = useSelectedLayoutSegments()

  return (
    <header
      ref={ref}
      className={cn(
        'col-span-header row-span-header',
        'flex items-center justify-start bg-white pl-3.5 shadow-[0_0_5px_0_rgb(0_0_0_/_20%)]',
      )}
      {...props}
    >
      <Link className="rounded-sm px-1 hover:bg-gray-200" href="/">
        Home
      </Link>
      {segments.map((segment) => (
        <Fragment key={segment}>
          <span className="select-none text-gray-400">/</span>

          <Link className="rounded-sm px-1 hover:bg-gray-200" href={`/${segment}`}>
            {segment
              .split('-')
              .map((v) => stringCapitalization(v))
              .join(' ')}
          </Link>
        </Fragment>
      ))}
    </header>
  )
})
LayoutHeader.displayName = 'LayoutHeader'

export { LayoutHeader }
