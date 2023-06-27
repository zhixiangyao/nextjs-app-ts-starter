'use client'

import useBearStore from '@/store/useBearStore'
import { Button } from '@/components/ui/button'

const BearControls = () => {
  const increasePopulation = useBearStore((state) => state.increasePopulation)

  return <Button onClick={increasePopulation}>one up ++</Button>
}

export { BearControls }
