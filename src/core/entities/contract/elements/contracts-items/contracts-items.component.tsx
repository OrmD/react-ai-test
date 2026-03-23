'use client'

import { FC, useRef } from 'react'
import ContractsItemComponent from '../contracts-item/contracts-item.component'
import { TabsContentUI } from '@/core/shared/ui/tabs/tabs.ui'
import CarouselUi from '@/core/shared/ui/carrousel/carousel.ui'
import { CarouselContentUi, CarouselItemUi } from '@/core/shared/ui/carrousel'
import { useContractsStore } from '@/core/shared/store/contracts/contracts.provider'

interface IContractsItemsComponentProps {
  className?: string
  
}



const ContractsItemsComponent: FC<IContractsItemsComponentProps> = ({ className }) => {

  const {contracts} = useContractsStore((state) => state)

  const carouselRef = useRef<HTMLDivElement>(null)
  
  return (
    <CarouselUi 
    opts={
      {
        loop:false
      }
    }
    ref={carouselRef}
          className={className}>

      <CarouselContentUi className='flex -ml-2.5'>

        {contracts?.map((contract,index) => {

          return ( 
            <CarouselItemUi key={index} className='pl-2.5 border-none max-w-[420px] w-full'>

       <TabsContentUI key={index} value={contract.category}>
         
          <ContractsItemComponent data={contract} ></ContractsItemComponent>
      </TabsContentUI>
            </CarouselItemUi>
        )})}
      </CarouselContentUi>
    </CarouselUi>
  )
}
export default ContractsItemsComponent
