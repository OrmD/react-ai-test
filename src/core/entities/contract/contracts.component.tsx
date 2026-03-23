import { FC, useMemo } from 'react'
import { ContractsTabsComponent } from './elements/contract-tabs'
import { ContractsItemsComponent } from './elements/contracts-items'
import { TabsUI } from '@/core/shared/ui/tabs/tabs.ui'
import { useContractsStore } from '@/core/shared/store/contracts/contracts.provider'

interface IContractsComponentProps {
  className?: string
}

const ContractsComponent: FC<IContractsComponentProps> = ({ className }) => {
  const { contracts } = useContractsStore((state) => state)

  const groupedContracts = useMemo(() => {
    return contracts?.reduce((acc, contract) => {
      if (!acc[contract.category]) {
        acc[contract.category] = []
      }
      acc[contract.category].push(contract)
      return acc
    }, {} as Record<string, typeof contracts>)
  }, [contracts])

  const categories = Object.keys(groupedContracts || {})

  if (!categories.length) return null
  return (
    <div>
      <TabsUI defaultValue='IT Contractor'  className={className}>
        <ContractsTabsComponent className='mb-[30px]'></ContractsTabsComponent>
        {Object.entries(groupedContracts || {})?.map(([category, items]) => (
  <ContractsItemsComponent
    key={category}
    category={category}
    items={items}
    className={className}
  />
))}
      </TabsUI>
    </div>
  )
}
export default ContractsComponent
