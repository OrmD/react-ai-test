import { ComponentProps, ElementType, FC, memo } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import cn from '@/core/shared/utils/cn'

const titleVariants = cva('', {
  variants: {
    variant: {
      white: 'text-white font-medium leading-[60px] text-[50px] ',
      black: 'text-dark font-semibold text-[35px] leading-[50px]',
    },
  },
  defaultVariants: {
    variant: 'black',
  },
})

interface ITitleProps extends ComponentProps<any>, VariantProps<typeof titleVariants> {
  className?: string
  as?: ElementType | null
}

const TitleUi: FC<ITitleProps> = ({
  className,
  children,
  as: Component = 'h2',
  variant,
  ...otherProps
}) => {
  const Tag = Component || 'h2'

  return (
    <Tag className={cn(titleVariants({ variant }), 'text-center', className)} {...otherProps}>
      {children}
    </Tag>
  )
}
export default memo(TitleUi)
