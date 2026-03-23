'use client'

import { FC } from 'react'

import { ClearButtonUi } from '@/core/shared/ui/buttons/clear-button'
import { LinkUI } from '@/core/shared/ui/link'
import { LogoUI } from '@/core/shared/ui/logo'
import cn from '@/core/shared/utils/cn'
import Link from 'next/link'

interface IHeaderComponent {
  className?: string
}

const navItems = [
  {
    name: 'Home',
    href: 'Home',
  },
  {
    name: 'How It Works',
    href: 'How-It-Works',
  },
  {
    name: 'Latest Contracts Post',
    href: 'Latest-Contracts-Post',
  },
]

const HeaderComponent: FC<IHeaderComponent> = ({ className }) => {
  return (
    <header className={cn('absolute top-5 z-[100] w-full px-2.5', className)}>
      <nav className='mx-auto flex w-full max-w-[1360px] flex-col flex-wrap items-center justify-center gap-1 rounded-[60px] bg-[#ffffff50] px-3 px-5 py-3 backdrop-blur-[42px] md:flex-row md:justify-between'>
        <LogoUI />

        <ul className='flex gap-4'>
          {navItems &&
            navItems.map((item, index) => (
              <li key={index} >
                <Link href={'#'+item.href} className='hover:text-[#0935FE]'>
                  {item.name}
                </Link>
              </li>
            ))}
        </ul>

        <div className='flex gap-1'>
          <ClearButtonUi variant='withBg'>
            <LinkUI href='/'>Login</LinkUI>
          </ClearButtonUi>
          <ClearButtonUi variant='withBorder'>
            <LinkUI href='/'>Register</LinkUI>
          </ClearButtonUi>
        </div>
      </nav>
    </header>
  )
}
export default HeaderComponent
