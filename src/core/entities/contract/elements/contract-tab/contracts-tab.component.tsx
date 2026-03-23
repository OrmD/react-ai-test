import { IconUI } from '@/core/shared/ui/icons'
import { TabsTriggerUI } from '@/core/shared/ui/tabs/tabs.ui'
import cn from '@/core/shared/utils/cn'
import { FC } from 'react'

interface IContractsTabComponentProps {
  className?: string
  children?: string
  key?: number
  value: string
  icon?: string
}



const ContractsTabComponent: FC<IContractsTabComponentProps> = ({ className, value, icon, key, children }) => {
  return (
    <TabsTriggerUI  value={value} key={key} className={cn('flex gap-3.5 items-center',className)} >
      <div className='bg-[#0026FF] rounded-full w-10 h-10 flex items-center justify-center'>

     {icon && <IconUI variant={icon} className='text-white' />}
      </div>
     {children}
     </TabsTriggerUI>
  )
}
export default ContractsTabComponent
