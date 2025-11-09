import React from "react";
import Image from "next/image";
import Link from "next/link";

interface AppLogoProps {
    className?: string;
    width?: number;
    height?: number;
    variant?: 'default' | 'small';
}

const AppLogo: React.FC<AppLogoProps> = ({className, width = 200, height = 40}: AppLogoProps) => {
    return (
        <div className="logo-container">
            <Link href="/" className="no-underline">
                <Image
                    src="/img/colyon-logo.png"
                    alt="Colyon Logo"
                    width={width}
                    height={height}
                    className={`h-auto ${className}`}
                    priority
                />
            </Link>
        </div>
    );
};

export default AppLogo;
