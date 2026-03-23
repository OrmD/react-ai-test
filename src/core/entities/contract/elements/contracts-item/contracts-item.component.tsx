import { IconUI } from '@/core/shared/ui/icons'
import { FC } from 'react'

interface IContractsItemComponentProps {
  className?: string
}



const ContractsItemComponent: FC<IContractsItemComponentProps> = ({ className }) => {
  return ( 
    <article className='relative max-w-[400px] h-[425px]  rounded-[30px] flex-col bg-[#F6F6F6] pl-7.5 pr-5 py-5 flex items-left justify-center'>
      <p className='mb-6 h-10'>logo</p>
      <h3 className='mb-2 text-5 leading-7 font-semibold'>Contract: Annual Cybersecurity & Threat Monitoring</h3>
      <p className='mb-3.5 text-5 leading-7 font-semibold'>$120,000 / Annual Contract</p>
      <div className='mb-3.5 flex gap-2.5'>
        <IconUI variant='time' className='text-black/50 ' />
      <p className='text-[15px] leading-6 text-black/50'>12 Months | Renewable</p>
      </div>

      <div className='mb-4 flex gap-2.5'>
        <div className='max-w-[125px] w-full rounded-[70px] border border-[#235DFC] p-2 '>
          <p className='text-[#235DFC]  text-[13px]'>btn-1</p>
        </div>
        <div className='max-w-[125px] w-full rounded-[70px] border border-[#01D04D] p-2 '>
          <p className='text-[#01D04D] text-[13px]'>btn-1</p>
        </div>
      </div>

      <p className='text-[14px] text-black/50 leading-6 max-w-[290px]'>Looking for an IT security partner to manage firewalls, intrusion detection, and ongoing risk assessments for corporate infrastructure.</p>

      <div className='absolute bottom-0 right-0 bg-white rounded-[30px] p-5'>

      <div className=' bg-[#0935FE] w-[50px] h-[50px] flex justify-center rounded-full items-center'>
        <IconUI variant='arrow' className='text-white ' />
      </div>
      </div>
    </article>
  )
}
export default ContractsItemComponent
