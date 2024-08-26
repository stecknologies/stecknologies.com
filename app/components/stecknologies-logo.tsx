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

    return <Logo className={className} />;
}