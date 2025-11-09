import React from "react";
import Image from "next/image";
import Link from "next/link";

interface AppLogoProps {
    className?: string;
    width?: number;
    height?: number;
    variant?: 'default' | 'small';
}

const AppLogo: React.FC<AppLogoProps> = ({className = "", width = 500, height = 50}: AppLogoProps) => {
    return (
        <div className="logo-container">
            <Link href="/" className="no-underline hover:opacity-80 transition-opacity">
                <Image
                    src="/img/colyon-logo.png" // served from public/img
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
