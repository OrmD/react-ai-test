'use client'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as Tabs from '@radix-ui/react-tabs'

import cn from '@/core/shared/utils/cn'

// Root
const TabsUI = Tabs.Root

// List
const TabsListUI = forwardRef<
  ElementRef<typeof Tabs.List>,
  ComponentPropsWithoutRef<typeof Tabs.List>
>(({ className, ...props }, ref) => (
  <Tabs.List
    ref={ref}
    className={cn('flex items-center justify-between gap-4 rounded-md p-1', className)}
    {...props}
  />
))
TabsListUI.displayName = Tabs.List.displayName

// Trigger
const TabsTriggerUI = forwardRef<
  ElementRef<typeof Tabs.Trigger>,
  ComponentPropsWithoutRef<typeof Tabs.Trigger>
>(({ className, ...props }, ref) => (
  <Tabs.Trigger
    ref={ref}
    className={cn(
      'font-regular t w-full max-w-[250px] rounded-[70px] bg-[#F6F6F6] px-3 py-2 text-sm text-[#27272A] text-gray-700 hover:bg-[#1A51FC50] data-[state=active]:bg-[#1A51FC] data-[state=active]:text-white data-[state=active]:shadow',
      className,
    )}
    {...props}
  />
))
TabsTriggerUI.displayName = Tabs.Trigger.displayName

// Content
const TabsContentUI = forwardRef<
  ElementRef<typeof Tabs.Content>,
  ComponentPropsWithoutRef<typeof Tabs.Content>
>(({ className, ...props }, ref) => (
  <Tabs.Content ref={ref} className={cn('rounded-md bg-white', className)} {...props} />
))
TabsContentUI.displayName = Tabs.Content.displayName

export { TabsUI, TabsListUI, TabsTriggerUI, TabsContentUI }
