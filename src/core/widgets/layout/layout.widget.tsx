import { FC, ReactNode } from 'react'

import { HeaderComponent } from '@/core/widgets/layout/header'

interface ILayoutWidgetProps {
  children: ReactNode
}

const LayoutWidget: FC<ILayoutWidgetProps> = ({ children }) => {
  return (
    <main className='relative h-full'>
      <HeaderComponent />
      {children}
    </main>
  )
}
export default LayoutWidget
