import * as React from 'react'
import { memo } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/core/shared/utils/cn'

const buttonVariants = cva(
  'inline-flex items-center justify-start gap-2 text-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-95 transition-transform disabled:pointer-events-none [&_svg]:pointer-events-none transition-all leading-[100%] disabled:text-gray-300 text-left p-4',
  {
    variants: {
      variant: {
        default: 'text-[#18181B] p-2 hover:text-[#0935FE]',
        withBorder: ' rounded-[36px] border border-[#0935FE] hover:bg-[#17171720] text-[#0935FE]',
        withBg:
          'bg-[linear-gradient(170deg,_rgba(152,238,255,1)_0%,_rgba(9,53,254,1)_50%)] rounded-[40px] py-2',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface PrimaryButtonComponentProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const ClearButtonUi = React.forwardRef<HTMLButtonElement, PrimaryButtonComponentProps>(
  (
    {
      className,
      variant,

      asChild = false,
      'aria-label': ariaLabel = 'button',
      type = 'button',
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        {...props}
        ref={ref}
        type={type}
        aria-label={ariaLabel}
      />
    )
  },
)
ClearButtonUi.displayName = 'ClearButtonComponent'

export default memo(ClearButtonUi)
export { buttonVariants }
