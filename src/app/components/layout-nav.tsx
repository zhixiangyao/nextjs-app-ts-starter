'use client'

import type { RefObject } from 'react'
import { cn } from '@/lib/utils'

import { useStoreState } from '@/store/hooks'
import useLayoutStore from '@/store/useLayoutStore'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'

import { Menu } from './menu'

type Props = {
  className?: string
  ref?: RefObject<HTMLElement>
}

function LayoutNav({ ref, className }: Props) {
  const navExpand = useStoreState(useLayoutStore, state => state.navExpand)

  const toggleNav = useLayoutStore(state => state.toggleNav)

  return (
    <nav ref={ref} className={cn('col-span-nav row-span-nav flex flex-col justify-between bg-blue-800', className)}>
      <div className="sticky top-0 z-[1] flex h-[70px] select-none items-center overflow-hidden px-0 text-[25px] text-white">
        <div className="cursor-pointer px-7 py-[27px]">
          <MoreHorizontal />
        </div>

        {navExpand && <div>QA</div>}
      </div>

      <Menu />

      <div
        className="flex h-12 cursor-pointer select-none items-center justify-center bg-blue-900 text-white"
        onClick={toggleNav}
      >
        {navExpand ? <ChevronLeft /> : <ChevronRight />}
      </div>
    </nav>
  )
}
LayoutNav.displayName = 'LayoutNav'

export { LayoutNav }
