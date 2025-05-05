import Link from "next/link";
import Image from "next/image";

type SocialIconProps = {
    alt: string;
    srcLight: string;
    srcDark: string;
    href: string;
};

const SocialIcon = ({ alt, srcLight, srcDark, href }: SocialIconProps) => {
    return (
        <Link href={href} target="_blank" rel="noopener noreferrer" className="w-6 h-6">
            <div className="w-full h-full">
                <Image src={srcLight} alt={alt} className="block dark:hidden w-5 h-5" width={0} height={0} />
                <Image src={srcDark} alt={alt} className="hidden dark:block w-5 h-5" width={0} height={0} />
            </div>
        </Link>
    );
}

export default SocialIcon
