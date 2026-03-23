'use client'

import { FC } from 'react'

import { ClearButtonUi } from '@/core/shared/ui/buttons/clear-button'
import { LinkUI } from '@/core/shared/ui/link'
import { LogoUI } from '@/core/shared/ui/logo'
import cn from '@/core/shared/utils/cn'

interface IHeaderComponent {
  className?: string
}

const navItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'How It Works',
    href: '/',
  },
  {
    name: 'Latest Contracts Post',
    href: '/',
  },
]

const HeaderComponent: FC<IHeaderComponent> = ({ className }) => {
  return (
    <header className={cn('absolute top-5 z-[100] w-full px-2.5', className)}>
      <nav className='mx-auto  flex w-full max-w-[1360px] md:flex-row flex-wrap items-center md:justify-between gap-1 rounded-[60px] bg-[#ffffff50] px-3 px-5 py-3 backdrop-blur-[42px] flex-col justify-center  '>
        <LogoUI />

        <ul className='flex gap-4'>
          {navItems &&
            navItems.map((item, index) => (
              <li key={index}>
                <LinkUI href={item.href} className='hover:text-[#0935FE]'>
                  {item.name}
                </LinkUI>
              </li>
            ))}
        </ul>

        <div className='flex gap-1'>
          <ClearButtonUi variant='withBg'>
            <LinkUI href='/'>Login</LinkUI>
          </ClearButtonUi>
          <ClearButtonUi variant="withBorder">
            <LinkUI href='/'>Register</LinkUI>
          </ClearButtonUi>
        </div>
      </nav>
    </header>
  )
}
export default HeaderComponent
