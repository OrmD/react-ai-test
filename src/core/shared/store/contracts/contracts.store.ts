import { createStore } from 'zustand/vanilla'
import { Category, Contract } from '../../types'


export interface IContractsStoreState {
  categories?: Category[] | undefined
  contracts?: Contract[] | undefined
}



export type TContractsStore = IContractsStoreState 

export const createContractsStore = (initialState?: IContractsStoreState) => {
  return createStore<TContractsStore>(() => ({
    ...initialState,
}))
}
