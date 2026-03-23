import { FC } from 'react'

import { ClearButtonUi } from '@/core/shared/ui/buttons/clear-button'
import { ImageUI } from '@/core/shared/ui/image'
import { SubTitleUI } from '@/core/shared/ui/sub-title'
import { TitleUI } from '@/core/shared/ui/title'
import cn from '@/core/shared/utils/cn'
import { IconUI } from '@/core/shared/ui/icons'

interface IHeroSectionProps {
  className?: string
}

const data = {
  title: 'Run Your Business',
  subTitle: 'Find better suppliers. Secure real contracts. Build lasting partnerships.',
  description: '480.000+ Available Contracts Listed',
}

const HeroSection: FC<IHeroSectionProps> = ({ className }) => {
  return (
    <section className={cn('relative h-[600px] w-full md:h-[800px]', className)}>
      <ImageUI src='/hero-img.png' imageClassName='object-cover' className='z-[1]' fill />
      <div className='relative z-[2] flex h-full flex-col items-center justify-end p-[90px] px-5 text-center md:justify-center'>
        {data.title && (
          <TitleUI as='h1' className='mb-3 leading-[60px]' variant='white'>
            {data.title}
          </TitleUI>
        )}
        {data.subTitle && (
          <SubTitleUI as='h1' className='mb-9' variant='white'>
            {data.subTitle}
          </SubTitleUI>
        )}

        <div className='mb-4 flex h-[60px] w-full max-w-[1135px] items-center gap-2 rounded-[40px] border border-white bg-[#ffffff10] py-2.5 pl-[36px] backdrop-blur-[12px] md:h-[80px]'>
          <IconUI variant='search' className='text-white' />
          <input
            id='search'
            className='h-full w-full text-[25px] text-white transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50'
          />

          <ClearButtonUi variant='withBg' className='mr-4 px-[30px] h-[50px] text-white'>
            Search
          </ClearButtonUi>
        </div>
        <p className='text-white'>{data.description}</p>
      </div>
    </section>
  )
}
export default HeroSection
