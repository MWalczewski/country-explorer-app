'use client';

import { useTranslations } from "next-intl";
import Image from 'next/image';


const Hero = () => {
    const t = useTranslations("home");


    return (
        <section className="w-full px-4 py-4 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">

                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
                        {t("title")}
                    </h1>
                    <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                        {t("description")}
                    </p>
                </div>

                <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                    <Image
                        src="/images/globe-icon.png"
                        alt="Globe Illustration"
                        width={400}
                        height={400}
                        className="w-full max-w-sm"
                    />
                </div>
                
            </div>
        </section>
    )
}

export default Hero