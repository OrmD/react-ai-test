'use client'

import { FC, memo } from 'react'

const LogoUI: FC = () => (
  <div className='relative z-[2] text-[30px] font-bold tracking-[-0.03em] text-[#1E1E1E] uppercase before:absolute before:top-[3px] before:left-[-10px] before:z-[-1] before:h-6 before:w-6 before:rounded-full before:bg-[#3276FA]'>
    TEST TASK
  </div>
)
export default memo(LogoUI)
