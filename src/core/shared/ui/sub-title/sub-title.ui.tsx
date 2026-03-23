import { ComponentProps, ElementType, FC, memo } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import cn from '@/core/shared/utils/cn'

const subTitleVariants = cva('font-regular text-[18px] leading-[30px] text-center', {
  variants: {
    variant: {
      white: 'text-white  ',
      black: 'text-black/50 ',
    },
  },
  defaultVariants: {
    variant: 'black',
  },
})

interface ISubTitleProps extends ComponentProps<any>, VariantProps<typeof subTitleVariants> {
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
      className={cn(subTitleVariants({ variant }),  className)}
      {...otherProps}
    >
      {children}
    </Tag>
  )
}
export default memo(SubTitleUi)
