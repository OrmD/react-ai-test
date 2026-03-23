import { TabsListUI, TabsTriggerUI } from '@/core/shared/ui/tabs/tabs.ui'
import { FC } from 'react'

interface IContractsTabsComponentProps {
  className?: string
}



const ContractsTabsComponent: FC<IContractsTabsComponentProps> = ({ className }) => {
  return (
    <TabsListUI>
       <TabsTriggerUI value="tab1" defaultChecked>Tab 1</TabsTriggerUI>
        <TabsTriggerUI value="tab2">Tab 2</TabsTriggerUI>
          <TabsTriggerUI value="tab3">Tab 3</TabsTriggerUI>
    </TabsListUI>
  )
}
export default ContractsTabsComponent
