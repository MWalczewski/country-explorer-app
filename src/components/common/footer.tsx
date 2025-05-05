"use client";

import { socialLinks } from "@/constants/socialLinks";
import SocialIcon from "./socialIcon";
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";

const Footer = () => {

    return (
        <div className="w-full bg-gray-200 dark:bg-gray-800">
            <div className="container max-w-7xl mx-auto flex flex-col justify-center items-center gap-2 py-4 relative">
                <div className="flex gap-2">
                    {socialLinks.map((link) =>
                        <SocialIcon
                            key={link.name}
                            alt={link.alt}
                            srcLight={link.srcLight}
                            srcDark={link.srcDark}
                            href={link.href}
                        />
                    )}
                </div>
                <div className=" text-gray-500 dark:text-gray-400">
                    &copy; {new Date().getUTCFullYear()} Maciej Walczewski
                </div>
                <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="absolute right-0 text-gray-500 dark:text-gray-400 hover:text-gray-600 hover:dark:text-gray-200 cursor-pointer">
                    <ArrowUpCircleIcon className="h-6 w-6" />
                </div>
            </div>
        </div>
    )
}

export default Footer;