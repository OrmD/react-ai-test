import { Contract } from '@/core/shared/types'
import { IconUI } from '@/core/shared/ui/icons'
import cn from '@/core/shared/utils/cn'
import { FC } from 'react'

interface IContractsItemComponentProps {
  className?: string
  data: Contract
}

const ContractsItemComponent: FC<IContractsItemComponentProps> = ({ className, data }) => {
  return (
    <article className='items-left relative flex h-[425px] w-[400px] flex-col justify-center rounded-[30px] bg-[#F6F6F6] py-5 pr-5 pl-7.5'>
      <p className='mb-6 h-10'>{data.category}</p>
      <h3 className='text-5 mb-2 leading-7 font-semibold'>{data.title}</h3>
      <p className='text-5 mb-3.5 leading-7 font-semibold'>
        ${data.price}/{data.priceType}
      </p>
      <div className='mb-3.5 flex gap-2.5'>
        <IconUI variant='time' className='text-black/50' />
        <p className='text-[15px] leading-6 text-black/50'>{data.duration}</p>
      </div>

      <div className='mb-4 flex gap-2.5'>
        {data.tags.map((tag, index) => (
          <div
            key={index}
            className={cn(
              'w-full max-w-[125px] rounded-[70px] border border-[#235DFC] p-2',
              index % 2 === 0 ? 'border-[#235DFC]' : 'border-[#01D04D]',
            )}
          >
            <p
              className={cn(
                'text-[13px] text-[#235DFC]',
                index % 2 === 0 ? 'text-[#235DFC]' : 'text-[#01D04D]',
              )}
            >
              {tag}
            </p>
          </div>
        ))}
      </div>

      <p className='max-w-[290px] text-[14px] leading-6 text-black/50'>{data.description}</p>

      <div className='absolute right-0 bottom-0 rounded-[30px] bg-white p-5'>
        <div className='flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#0935FE]'>
          <IconUI variant='arrow' className='text-white' />
        </div>
      </div>
    </article>
  )
}
export default ContractsItemComponent
