import { FC } from 'react'

import { TitleUI } from '@/core/shared/ui/title'
import cn from '@/core/shared/utils/cn'
import { CarouselContentUi, CarouselItemUi, CarouselUi } from '@/core/shared/ui/carrousel'
import { ImageUI } from '@/core/shared/ui/image'

interface IHeroSectionProps {
  className?: string
}

const data = {
  title: 'Trusted by top data-driven teams',
  icons:[
    '/images/trust-us-1.png',
    '/images/trust-us-2.png',
    '/images/trust-us-3.png',
    '/images/trust-us-4.png',
    '/images/trust-us-5.png',
        '/images/trust-us-6.png',


  ]
}

const TrustUsSection: FC<IHeroSectionProps> = ({ className }) => {
  return (
    <section className={cn('', className)}>
      {data.title && (
        <TitleUI as='h2' className='mb-5' variant='black'>
          {data.title}
        </TitleUI>
      )}

      <CarouselUi >
        <CarouselContentUi
        >
          {data.icons.map((icon, index) => (
            <CarouselItemUi key={index} className='md:max-w-[300px] max-w-[150px] pl-10'>
              <ImageUI src={icon} width={200} height={200} className='aspect-[2/1] max-w-[200px] w-full' />
            </CarouselItemUi>
          ))}
        </CarouselContentUi>
      </CarouselUi>
    </section>
  )
}
export default TrustUsSection
