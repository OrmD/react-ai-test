import { FC } from 'react'
import ContractsItemComponent from '../contracts-item/contracts-item.component'

interface IContractsItemsComponentProps {
  className?: string
}



const ContractsItemsComponent: FC<IContractsItemsComponentProps> = ({ className }) => {
  return (
    <div>
      <ContractsItemComponent></ContractsItemComponent>
    </div>
  )
}
export default ContractsItemsComponent
