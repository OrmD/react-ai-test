import { FC } from 'react'
import { ContractsTabsComponent } from './elements/contract-tabs'
import { ContractsItemsComponent } from './elements/contracts-items'
import { TabsUI } from '@/core/shared/ui/tabs/tabs.ui'



interface IContractsComponentProps {
  className?: string
}


const ContractsComponent: FC<IContractsComponentProps> = ({ className }) => {
 
 
  return (
   <div>
    <TabsUI defaultValue='IT Contractor'>

    <ContractsTabsComponent className='mb-[30px]'></ContractsTabsComponent>
    <ContractsItemsComponent></ContractsItemsComponent>
    </TabsUI>
   </div>
  )
}
export default ContractsComponent
