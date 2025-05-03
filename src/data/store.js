import { create } from "zustand";

const useMenuStore = create((set) => ({
  isMenuOpen: false,
  storeToysList: [],

  setSummerToys: () => set((summerToysList) => ({ storeToysList: state.summerToysList })),

  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));

export { useMenuStore };
