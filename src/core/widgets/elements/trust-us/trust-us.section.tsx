import { FC } from 'react'

import { TitleUI } from '@/core/shared/ui/title'
import cn from '@/core/shared/utils/cn'

interface IHeroSectionProps {
  className?: string
}

const data = {
  title: 'Trusted by top data-driven teams',
}

const TrustUsSection: FC<IHeroSectionProps> = ({ className }) => {
  return (
    <section className={cn('h-full w-full', className)}>
      {data.title && (
        <TitleUI as='h2' className='mb-5' variant="black">
          {data.title}
        </TitleUI>
      )}
    </section>
  )
}
export default TrustUsSection
