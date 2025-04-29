'use client';

import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <main className="flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold">{t("title")}</h1>
      <p className="mt-4 text-lg">{t("description")}</p>
    </main>
  );
}
