import { NextComponentType, NextPageContext } from "next";
import NextI18Next from "next-i18next";
import path from 'path';

export const nextI18Next = new NextI18Next({
  defaultLanguage: 'pl',
  fallbackLng: "en",
  localePath: path.resolve('./public/locales'),
  otherLanguages: ['en'],
})

export type I18nPage<P = {}> = NextComponentType<
  NextPageContext,
  { namespacesRequired: string[] },
  P & { namespacesRequired: string[] }
>;

export const appWithTranslation = nextI18Next.appWithTranslation;
export const useTranslation = nextI18Next.useTranslation;
