import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { LanguageIcon } from "@heroicons/react/16/solid";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LanguageSelect = () => {
  const t = useTranslations("languageSelect");
  const router = useRouter();

  const languageOptions = [
    {
      language: t("en"),
      flag: "/images/en-flag.png",
      name: t("english"),
      alt: t("flagEn"),
    },
    {
      language: t("pl"),
      flag: "/images/pl-flag.png",
      name: t("polish"),
      alt: t("flagPl"),
    },
  ];

  function handleLocaleChange(newLocale : string): void {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  }

  return (
      <Menu>
        <MenuButton className="inline-flex items-center gap-2  text-gray-500 dark:text-gray-400 hover:text-gray-600 hover:dark:text-gray-200">
          <LanguageIcon className="h-4 w-4" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="origin-top-right shadow-lg rounded-xl border border-gray-700 bg-gray-400/40 dark:bg-blue-950/40 p-1 text-sm/6 text-white transition duration-150 ease-out [--anchor-gap:5px] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          {languageOptions.map((option) => (
            <MenuItem key={option.language}>
              <button
                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3  text-gray-500 dark:text-gray-400 hover:text-gray-600 hover:dark:text-gray-200 hover:bg-white/30"
                onClick={() => {
                  handleLocaleChange(option.language);
                }}
              >
                <Image
                  className="h-auto w-auto"
                  src={option.flag}
                  alt={option.alt}
                  width={0}
                  height={0}
                />
                {option.name}
              </button>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
  );
};

export default LanguageSelect;