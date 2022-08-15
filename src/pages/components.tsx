import MenuHeadlessUI from 'components/menu/menu-headless-ui'
import MenuRadixUI from 'components/menu/menu-radix-ui'
import PageLayout from 'components/page-layout'
import H1 from 'shared/headings/h1'
import H2 from 'shared/headings/h2'
import Spacer from 'shared/spacer'

interface Props {
  children?: React.ReactNode
  className?: string
}

export default function Components({}: Props) {
  return (
    <PageLayout>
      <H1>Components</H1>
      <Spacer y={16} />
      <H2>Dropdown Menu</H2>
      <p>Displays a menu to the user triggered by a button.</p>
      <h3>Framer Motion</h3>
      <div className="flex space-x-16">
        <div className="flex items-center">
          <p className="mb-0 text-sm">easeOut</p>
          <Spacer x={4} />
          <MenuRadixUI />
        </div>
        <div className="flex items-center">
          <p className="mb-0 text-sm">scale</p>
          <Spacer x={4} />
          <MenuHeadlessUI />
        </div>
      </div>
    </PageLayout>
  )
}
