import { create } from 'zustand'

const initialStates = {
  navExpand: false,
  navMenuExpand: false,
}

interface LayoutState {
  navExpand: boolean
  toggleNav: () => void

  navMenuExpand: boolean
  toggleNavMenu: () => void
}

const useLayoutStore = create<LayoutState>()((set) => ({
  navExpand: initialStates.navExpand,
  toggleNav: () => set((state) => ({ navExpand: !state.navExpand })),

  navMenuExpand: initialStates.navMenuExpand,
  toggleNavMenu: () => set((state) => ({ navMenuExpand: !state.navMenuExpand })),
}))

export default useLayoutStore
