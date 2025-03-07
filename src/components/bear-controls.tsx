'use client'

import { Button } from '@/components/ui/button'
import useBearStore from '@/store/useBearStore'

function BearControls() {
  const increasePopulation = useBearStore(state => state.increasePopulation)

  return <Button onClick={increasePopulation}>one up ++</Button>
}

export { BearControls }
