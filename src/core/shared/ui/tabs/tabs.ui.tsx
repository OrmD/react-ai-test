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
    className={cn(
      'inline-flex items-center justify-start rounded-md bg-gray-100 p-1',
      className
    )}
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
      'px-4 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-200 data-[state=active]:bg-white data-[state=active]:shadow',
      className
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
  <Tabs.Content
    ref={ref}
    className={cn('mt-2 rounded-md bg-white p-4 shadow', className)}
    {...props}
  />
))
TabsContentUI.displayName = Tabs.Content.displayName

export { TabsUI, TabsListUI, TabsTriggerUI, TabsContentUI }