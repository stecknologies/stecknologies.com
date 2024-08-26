"use client";
import React from "react";
import StecknologiesLogoWhite from "../../public/stecknologies-logo-white.svg";
import StecknologiesLogoBlack from "../../public/stecknologies-logo-black.svg";

export default function StecknologiesLogo({ className = '' }: { className?: string }) {
    const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);

    React.useEffect(() => {
        const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
        setIsDarkMode(matchMedia.matches);

        const handleChange = (e: MediaQueryListEvent) => {
            setIsDarkMode(e.matches);
        };

        matchMedia.addEventListener("change", handleChange);

        return () => {
            matchMedia.removeEventListener("change", handleChange);
        };
    }, []);

    const Logo = isDarkMode ? StecknologiesLogoWhite : StecknologiesLogoBlack;

    return (
        <div className={`flex items-center justify-center w-full h-full ${className}`}>
            <Logo className="w-full h-full max-w-[50%] max-h-[50%] sm:max-w-[40%] sm:max-h-[40%] md:max-w-[30%] md:max-h-[30%] object-contain" />
        </div>
    );
}