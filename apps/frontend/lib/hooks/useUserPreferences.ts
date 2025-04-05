import { Locale, Theme } from '@lib/models';
import { getDefaultLocale } from '@lib/utils/getDefaultLocale';
import { getDefaultTheme } from '@lib/utils/getDefaultTheme';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type UserPreferences = {
  theme: Theme;
  locale: Locale;

  actions: {
    setTheme: (theme: Theme) => void;
    setLocale: (locale: Locale) => void;
    setUserPreferences: (userPreferences: Partial<UserPreferences>) => void;
  };
};

export const useUserPreferences = create<UserPreferences>()(
  persist(
    (set) => ({
      theme: getDefaultTheme(),
      locale: getDefaultLocale(),
      actions: {
        setTheme: (theme: Theme) => set({ theme }),

        setLocale: (locale: Locale) => set({ locale }),
        setUserPreferences: (userPreferences: Partial<UserPreferences>) =>
          set((state) => ({
            ...state,
            ...userPreferences,
          })),
      },
    }),
    {
      name: 'user-preferences',
      version: 1,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        theme: state.theme,
      }),
    },
  ),
);
