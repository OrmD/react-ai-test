'use client'

import { FC } from 'react'
import { TabsContentUI } from '@/core/shared/ui/tabs/tabs.ui'
import CarouselUi from '@/core/shared/ui/carrousel/carousel.ui'
import { CarouselContentUi, CarouselItemUi } from '@/core/shared/ui/carrousel'
import ContractsItemComponent from '../contracts-item/contracts-item.component'
import { Contract } from '@/core/shared/types'

interface Props {
  category: string
  items: Contract[]
  className?: string
}

const ContractsItemsComponent: FC<Props> = ({ category, items, className }) => {
  return (
    <TabsContentUI value={category}>
      <CarouselUi opts={{ loop: false }} className={className}>
        <CarouselContentUi className="-ml-2.5 flex">
          {items.map((contract) => (
            <CarouselItemUi
              key={contract.id}
              className="w-full max-w-[420px] border-none pl-2.5"
            >
              <ContractsItemComponent data={contract} />
            </CarouselItemUi>
          ))}
        </CarouselContentUi>
      </CarouselUi>
    </TabsContentUI>
  )
}

export default ContractsItemsComponent