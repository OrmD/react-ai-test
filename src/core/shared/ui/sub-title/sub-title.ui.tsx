import { ComponentProps, ElementType, FC, memo } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import cn from '@/core/shared/utils/cn'

const titleVariants = cva('', {
  variants: {
    variant: {
      white: 'text-white font-regular text-[18px] leading-[30px] text-center',
      black: 'text-dark',
    },
  },
  defaultVariants: {
    variant: 'black',
  },
})

interface ISubTitleProps extends ComponentProps<any>, VariantProps<typeof titleVariants> {
  className?: string
  as?: ElementType | null
}

const SubTitleUi: FC<ISubTitleProps> = ({
  className,
  children,
  as: Component = 'h3',
  variant,
  ...otherProps
}) => {
  const Tag = Component || 'h2'

  return (
    <Tag
      className={cn(titleVariants({ variant }), 'text-center font-medium !text-white', className)}
      {...otherProps}
    >
      {children}
    </Tag>
  )
}
export default memo(SubTitleUi)
