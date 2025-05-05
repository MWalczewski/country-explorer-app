"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  GlobeEuropeAfricaIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";
import LanguageSelect from "./language-select";
import Link from "next/link";
import ThemeSwitch from "./theme-switch";

const Navbar = () => {
  const t = useTranslations("navbar");

  const navigation = [
    { name: t("home"), href: "/" },
    { name: t("login"), href: "/login" },
    { name: t("register"), href: "/register" },
  ];

  return (
    <>
      <Disclosure
        as="nav"
        className="sticky bg-gray-200 dark:bg-gray-800 top-0 shadow-md flex flex-col justify-start items-center py-7"
      >
        {({ open }) => (
          <>
            <div className="container  bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-gray-600 hover:dark:text-gray-200 flex justify-between pl-2 pr-3">
              <div className="flex items-center w-full">
                <Link
                  href="/"
                  className="text-2xl font-bold text-gray-500 dark:text-gray-400"
                >
                  <GlobeEuropeAfricaIcon className="h-10 w-10" />
                </Link>
                <div className="flex items-center xl:hidden px-3">
                  {/* Mobile menu button*/}
                  <DisclosureButton className="flex items-center justify-center rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-600 hover:dark:text-gray-200">
                    {open ? (
                      <XMarkIcon className="h-5 w-5" />
                    ) : (
                      <Bars3Icon className="h-5 w-5" />
                    )}
                  </DisclosureButton>
                </div>
                <div className="hidden xl:flex justify-between items-center">
                  <div id="navbar-links" className="flex gap-2 sm:gap-3">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="nav-btn px-2 py-2 text-gray-500 dark:text-gray-400 hover:text-gray-600 hover:dark:text-gray-200"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-3 justify-center items-center">
                <ThemeSwitch />
                <LanguageSelect />
              </div>
            </div>

            <DisclosurePanel className="xl:hidden container bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-gray-600 hover:dark:text-gray-200 pt-4">
              <div id="navbar-links" className="">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="nav-btn block px-2 py-2 text-gray-500 dark:text-gray-400 hover:text-gray-600 hover:dark:text-gray-200"
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Navbar;