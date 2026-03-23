import { FC } from 'react'
import { ContractsTabsComponent } from './elements/contract-tabs'
import { ContractsItemsComponent } from './elements/contracts-items'



interface IContractsComponentProps {
  className?: string
}


const ContractsComponent: FC<IContractsComponentProps> = ({ className }) => {
  return (
   <div>
    <ContractsTabsComponent></ContractsTabsComponent>
    <ContractsItemsComponent></ContractsItemsComponent>
   </div>
  )
}
export default ContractsComponent
