'use client';

import { create } from 'zustand';

// eslint-disable-next-line import/prefer-default-export
export const userStore = create((set) => ({
  user: {
    name: '', email: '', password: '', logged: false,
  },
  register: (user) => set((state) => ({
    user: { ...state.user, ...user },
  })),
  login: () => set((state) => ({
    user: { ...state.user, logged: true },
  })),
  logout: () => set((state) => ({
    user: { ...state.user, logged: false },
  })),
}));
