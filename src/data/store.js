import { create } from "zustand";

const useMenuStore = create((set) => ({
  isMenuOpen: false,
  storeToysList: [],

  setSummerToys: (newToy) => set(() => ({ storeToysList: newToy })),

  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));

export { useMenuStore };
