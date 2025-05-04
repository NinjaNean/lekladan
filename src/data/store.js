import { create } from "zustand";

const useMenuStore = create((set, get) => ({
  isMenuOpen: false,
  storeToysList: [],
  cartList: [],

  setSummerToys: (newToy) => set(() => ({ storeToysList: newToy })),

  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),

  addToCart: (toy) => {
    const { cartList } = get();
    let result = cartList.find((item) => item.id === toy.id);

    if (!result) {
      set((state) => ({ cartList: [...state.cartList, { ...toy, quantity: 1 }] }));
    } else {
      const updateCart = cartList.map((item) =>
        item.id === result.id ? { ...item, quantity: item.quantity + 1 } : item
      );

      set(() => ({
        cartList: updateCart,
      }));
    }
  },

  removeFromCart: (toy) => {
    const { cartList } = get();
    let result = cartList.find((item) => item.id === toy.id);

    const updateCart = cartList.map((item) =>
      item.id === result.id ? { ...item, quantity: item.quantity - 1 } : item
    );

    set(() => ({
      cartList: updateCart,
    }));
  },
}));

export { useMenuStore };
