"use client";

import React from "react";
import { useTranslations } from "next-intl";

const LoginPage = () => {
    const t = useTranslations("login");

    return (
        <main className="flex flex-col items-center justify-center p-6">
            <h1 className="text-4xl font-bold">{t("title")}</h1>
            <p className="mt-4 text-lg">{t("pageInProgress")}</p>
        </main>
    );
};

export default LoginPage;