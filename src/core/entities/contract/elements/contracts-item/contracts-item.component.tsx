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
    <article className='relative w-[400px] h-[425px]  rounded-[30px] flex-col bg-[#F6F6F6] pl-7.5 pr-5 py-5 flex items-left justify-center'>
      <p className='mb-6 h-10'>{data.category}</p>
      <h3 className='mb-2 text-5 leading-7 font-semibold'>{data.title}</h3>
      <p className='mb-3.5 text-5 leading-7 font-semibold'>${data.price}/{data.priceType}</p>
      <div className='mb-3.5 flex gap-2.5'>
        <IconUI variant='time' className='text-black/50 ' />
      <p className='text-[15px] leading-6 text-black/50'>{data.duration}</p>
      </div>

      <div className='mb-4 flex gap-2.5'>
        {data.tags.map((tag,index) => (
          <div key={index} className={cn('max-w-[125px] w-full rounded-[70px] border border-[#235DFC] p-2 ',index % 2 === 0 ? 'border-[#235DFC]' : 'border-[#01D04D]')}>
            <p className={cn('text-[#235DFC]  text-[13px]', index % 2 === 0 ? 'text-[#235DFC]' : 'text-[#01D04D]')}>{tag}</p>
          </div>
        ))}
        

        
      </div>

      <p className='text-[14px] text-black/50 leading-6 max-w-[290px]'>{data.description}</p>

      <div className='absolute bottom-0 right-0 bg-white rounded-[30px] p-5'>

      <div className=' bg-[#0935FE] w-[50px] h-[50px] flex justify-center rounded-full items-center'>
        <IconUI variant='arrow' className='text-white ' />
      </div>
      </div>
    </article>
  )
}
export default ContractsItemComponent
