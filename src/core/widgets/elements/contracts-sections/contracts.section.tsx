'use client'
import { FC } from 'react'

import { SubTitleUI } from '@/core/shared/ui/sub-title'
import { TitleUI } from '@/core/shared/ui/title'
import cn from '@/core/shared/utils/cn'
import { ContractsComponent } from '@/core/entities/contract'
import { IconUI } from '@/core/shared/ui/icons'
import { Category, Contract } from '@/core/shared/types'
import { ContractsStoreProvider } from '@/core/shared/store/contracts/contracts.provider'

interface IContractsSectionProps {
  className?: string
  data: {
    contracts: Contract[]
    categories: Category[]
  }
}

const DATA = {
  title: 'Latest Contracts Post',
  subTitle: 'Search and connect with the right companies faster',
}

const ContractsSection: FC<IContractsSectionProps> = ({ className, data }) => {
  return (
    <ContractsStoreProvider initialData={data}>
      <section id='Latest-Contracts-Post' className={cn(' ', className)}>
        {DATA.title && <TitleUI as='h2'> {DATA.title} </TitleUI>}
        {DATA.subTitle && (
          <SubTitleUI as='h3' variant='black' className='mb-9'>
            {DATA.subTitle}
          </SubTitleUI>
        )}

        <ContractsComponent></ContractsComponent>
      </section>
    </ContractsStoreProvider>
  )
}
export default ContractsSection
