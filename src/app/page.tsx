import { BearControls } from '@/components/bear-controls'
import { BearCounter } from '@/components/bear-counter'

export const metadata = {
  title: 'Home',
}

const RootPage = async () => {
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
