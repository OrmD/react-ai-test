'use client'

import { createContext, ReactNode, useContext, useMemo, useRef } from 'react'
import { useStore } from 'zustand/react'

import {
  createContractsStore,
  IContractsStoreState,
  TContractsStore,
} from '@/core/shared/store/contracts/contracts.store'

type TContractsStoreContext = ReturnType<typeof createContractsStore> | undefined

export const ContractsStoreContext = createContext<TContractsStoreContext>(undefined)

interface IContractsStoreProviderProps {
  children: ReactNode
  initialData: IContractsStoreState
}

export const ContractsStoreProvider = ({ initialData, children }: IContractsStoreProviderProps) => {
  const store = useMemo(() => createContractsStore(initialData), [initialData])

  return <ContractsStoreContext.Provider value={store}>{children}</ContractsStoreContext.Provider>
}

export const useContractsStore = <T,>(selector: (store: TContractsStore) => T): T => {
  const counterStoreContext = useContext(ContractsStoreContext)
  if (!counterStoreContext) {
    throw new Error(`useContractsStore must be used within ContractsStoreProvider`)
  }

  return useStore(counterStoreContext, selector)
}
