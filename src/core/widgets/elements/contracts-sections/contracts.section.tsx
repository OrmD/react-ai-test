import { FC } from 'react'

import { SubTitleUI } from '@/core/shared/ui/sub-title'
import { TitleUI } from '@/core/shared/ui/title'
import cn from '@/core/shared/utils/cn'
import { ContractsComponent } from '@/core/entities/contract'
import { IconUI } from '@/core/shared/ui/icons'

interface IContractsSectionProps {
  className?: string
}

const data = {
  title: 'Latest Contracts Post',
  subTitle: 'Search and connect with the right companies faster',
 
}

const ContractsSection: FC<IContractsSectionProps> = ({ className }) => {
  return (
    <section className={cn(' ', className)}>
     {data.title && <TitleUI as='h2'> {data.title} </TitleUI>}
     {data.subTitle && <SubTitleUI as='h3' variant="black" className='mb-9'> {data.subTitle} </SubTitleUI>}
      <IconUI variant='search' className='' />
      <IconUI variant='arrow' className='' />
      <IconUI variant='accountancy' className='' />
      <IconUI variant='banking' className='' />
      <IconUI variant='content-write' className='' />
      <IconUI variant='light' className='' />
      <IconUI variant='loudspeaker' className='' />
      <IconUI variant='PC' className='' />
     <ContractsComponent></ContractsComponent>
    </section>
  )
}
export default ContractsSection
