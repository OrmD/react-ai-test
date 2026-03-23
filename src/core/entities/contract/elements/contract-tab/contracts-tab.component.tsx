import { IconUI } from '@/core/shared/ui/icons'
import { TabsTriggerUI } from '@/core/shared/ui/tabs/tabs.ui'
import cn from '@/core/shared/utils/cn'
import { FC } from 'react'

interface IContractsTabComponentProps {
  className?: string
  children?: string

  value: string
  icon?: string
}

const ContractsTabComponent: FC<IContractsTabComponentProps> = ({
  className,
  value,
  icon,
  children,
}) => {
  console.log('tab value', value)

  return (
    <TabsTriggerUI value={value} className={cn('flex items-center gap-3.5', className)}>
      <div className='flex h-10 w-10 items-center justify-center rounded-full bg-[#0026FF]'>
        {icon && <IconUI variant={icon} className='text-white' />}
      </div>
      {children}
    </TabsTriggerUI>
  )
}
export default ContractsTabComponent
