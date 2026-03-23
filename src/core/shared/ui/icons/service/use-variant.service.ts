import { FC, SVGProps, useMemo } from 'react'

import {
  IconSearch,
  IconArrow,
  IconAccountancy,
  IconBanking,
  IconContentWrite,
  IconLight,
  IconLoudspeaker,
  IconPC,
  IconTime
} from '../assets'

export enum EVariant {
  SEARCH = 'search',
  ARROW = 'arrow',
  ACCOUNTANCY = 'accountancy',
  BANKING = 'banking',
  CONTENT_WRITE = 'content-write',
  LIGHT = 'light',
  LOUDSPEAKER = 'loudspeaker',
  PC = 'PC',
  TIME = 'time',
}

export type TVariant = (typeof EVariant)[keyof typeof EVariant] | string

interface IUseVariantProps {
  variant: TVariant
}

interface IUseVariantReturn {
  className: string
  icon: FC<SVGProps<SVGElement>>
}

const map = new Map<TVariant, { className: string; icon: FC<SVGProps<SVGElement>> }>([
  [
    EVariant.SEARCH,
    {
      className: 'h-6 w-5 text-black',
      icon: IconSearch,
    },
  ],
  [
    EVariant.ARROW,
    {
      className: 'h-6 w-5 text-black ',
      icon: IconArrow,
    },
  ],
   [
    EVariant.ACCOUNTANCY,
    {
      className: 'h-6 w-5 text-black ',
      icon: IconAccountancy,
    },
  ], [
    EVariant.BANKING,
    {
      className: 'h-6 w-5 text-black ',
      icon: IconBanking,
    },
  ], [
    EVariant.CONTENT_WRITE,
    {
      className: 'h-6 w-5 text-black ',
      icon: IconContentWrite,
    },
  ], [
    EVariant.LIGHT,
    {
      className: 'h-6 w-5 text-black ',
      icon: IconLight,
    },
  ], [
    EVariant.LOUDSPEAKER,
    {
      className: 'h-6 w-5 text-black ',
      icon: IconLoudspeaker,
    },
  ], [
    EVariant.PC,
    {
      className: 'h-6 w-5 text-black ',
      icon: IconPC,
    },
  ], [
    EVariant.TIME,
    {
      className: 'h-6 w-5 text-black ',
      icon: IconTime,
    },
    
  ]
  
])

export const useVariant = ({ variant }: IUseVariantProps): IUseVariantReturn | null => {
  return useMemo(() => map.get(variant)!, [variant])
}
