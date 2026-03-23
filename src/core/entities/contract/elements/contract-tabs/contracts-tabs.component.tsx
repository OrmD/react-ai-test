import { useContractsStore } from '@/core/shared/store/contracts/contracts.provider'
import { TabsListUI } from '@/core/shared/ui/tabs/tabs.ui'
import { FC } from 'react'
import ContractsTabComponent from '../contract-tab/contracts-tab.component'
import cn from '@/core/shared/utils/cn'

interface IContractsTabsComponentProps {
  className?: string
}

const ContractsTabsComponent: FC<IContractsTabsComponentProps> = ({ className }) => {
  const { categories } = useContractsStore((state) => state)

  return (
    <TabsListUI className={cn('flex-wrap justify-center',className)}>
      {categories?.map((category, index) => (
        <ContractsTabComponent key={index} value={category.name} icon={category.icon}>
          {category.name}
        </ContractsTabComponent>
      ))}
    </TabsListUI>
  )
}
export default ContractsTabsComponent
