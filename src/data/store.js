import { create } from "zustand";

const useMenuStore = create((set, get) => ({
  storeToysList: [],
  cartList: [],
  isLoggedIn: false,

  switchIsLoggedIn: () => set((state) => ({ isLoggedIn: !state.isLoggedIn })),

  setSummerToys: (newToyList) => {
    set(() => ({ storeToysList: newToyList }));
  },

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
    let updateCart = [];

    if (result.quantity === 1) {
      updateCart = cartList.filter((item) => item.id !== result.id);
    } else {
      updateCart = cartList.map((item) => (item.id === result.id ? { ...item, quantity: item.quantity - 1 } : item));
    }

    set(() => ({
      cartList: updateCart,
    }));
  },
}));

export { useMenuStore };
