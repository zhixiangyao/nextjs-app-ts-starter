import { BearControls } from '@/components/bear-controls'
import { BearCounter } from '@/components/bear-counter'

export const metadata = {
  title: 'Home',
}

async function RootPage() {
  return (
    <div>
      <BearControls />
      <br />
      <BearCounter />
      <br />
    </div>
  )
}

export default RootPage
