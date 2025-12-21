"use client";
import {useEffect, useRef, useState} from "react";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {ChevronDown, Menu, X} from "lucide-react";
import {useIsMobile} from "@/hooks/use-mobile";
import AppLogo from "@/components/AppLogo";

const Navigation = () => {
    const router = useRouter();
    const pathname = usePathname();
    const isMobile = useIsMobile();
    const [isOpen, setIsOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
    const submenuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    const menuItems = [
        {name: "Research", href: "/research"},
        {name: "Safety", href: "/safety"},
        {name: "XAI", href: "/xai"},
        {
            name: "Monchain",
            submenu: [
                {name: "API", href: "/products/monchain/api"},
                {name: "Wallet", href: "/products/monchain/wallet"},
                {name: "Check", href: "/products/monchain/check"},
            ],
        },
        {
            name: "Company",
            submenu: [
                {name: "About us", href: "/about"},
                {name: "Our mission", href: "/mission"},
                {name: "Careers", href: "/careers"},
            ],
        },
        {name: "News", href: "/news"},
        {name: "Contact", href: "/contact"},
    ];

    const normalizePath = (path?: string | null) => {
        if (!path) return "/";
        return path.replace(/\/+$/, "") || "/";
    };

    const isPathActive = (target?: string) => {
        const current = normalizePath(pathname);
        const goal = normalizePath(target);
        return current === goal || current.startsWith(`${goal}/`);
    };

    const isMenuItemActive = (item: (typeof menuItems)[number]) => {
        if (item.submenu) {
            return item.submenu.some((subItem) => isPathActive(subItem.href));
        }
        return isPathActive(item.href);
    };

    useEffect(() => {
        if (!activeSubmenu || isMobile) return;

        const handlePointerDown = (event: PointerEvent) => {
            const submenuElement = submenuRefs.current[activeSubmenu];
            if (submenuElement && !submenuElement.contains(event.target as Node)) {
                setActiveSubmenu(null);
            }
        };

        document.addEventListener("pointerdown", handlePointerDown);
        return () => {
            document.removeEventListener("pointerdown", handlePointerDown);
        };
    }, [activeSubmenu, isMobile]);

    return (
        <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <AppLogo className="h-auto w-1/3 md:h-10 md:w-auto"/>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                        {menuItems.map((item) => (
                            <div
                                key={item.name}
                                className="relative"
                                ref={(el) => {
                                    if (item.submenu) {
                                        submenuRefs.current[item.name] = el;
                                    }
                                }}
                            >
                                {item.submenu ? (
                                    <>
                                        <button
                                            onClick={() => setActiveSubmenu(activeSubmenu === item.name ? null : item.name)}
                                            className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                                                isMenuItemActive(item) ? "text-accent" : "text-foreground/80 hover:text-foreground"
                                            }`}
                                            aria-expanded={activeSubmenu === item.name}
                                        >
                                            {item.name}
                                            <ChevronDown
                                                className={`w-4 h-4 transition-transform ${activeSubmenu === item.name ? "rotate-180" : ""}`}/>
                                        </button>
                                        {activeSubmenu === item.name && (
                                            <div
                                                className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg py-2 animate-fade-in z-50">
                                                {item.submenu.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className={`block px-4 py-2 text-sm transition-colors ${
                                                            isPathActive(subItem.href)
                                                                ? "text-accent bg-accent/20"
                                                                : "text-foreground/80 hover:text-black hover:bg-white"
                                                        }`}
                                                        onClick={() => setActiveSubmenu(null)}
                                                        aria-current={isPathActive(subItem.href) ? "page" : undefined}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={`text-sm font-medium transition-colors ${
                                            isMenuItemActive(item) ? "text-accent" : "text-foreground/80 hover:text-foreground"
                                        }`}
                                        aria-current={isMenuItemActive(item) ? "page" : undefined}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 hover:bg-accent/50 rounded-md transition-colors"
                    >
                        {isOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden mt-4 pb-4 animate-fade-in">
                        {menuItems.map((item) => (
                            <div key={item.name} className="py-2">
                                {item.submenu ? (
                                    <>
                                        <button
                                            onClick={() =>
                                                setActiveSubmenu(activeSubmenu === item.name ? null : item.name)
                                            }
                                            className={`flex items-center justify-between w-full text-sm font-medium transition-colors ${
                                                isMenuItemActive(item)
                                                    ? "text-accent"
                                                    : "text-foreground/80 hover:text-foreground"
                                            }`}
                                            aria-expanded={activeSubmenu === item.name}
                                        >
                                            {item.name}
                                            <ChevronDown
                                                className={`w-4 h-4 transition-transform ${
                                                    activeSubmenu === item.name ? "rotate-180" : ""
                                                }`}
                                            />
                                        </button>
                                        {activeSubmenu === item.name && (
                                            <div className="pl-4 mt-2 space-y-2">
                                                {item.submenu.map((subItem) => (
                                                    <button
                                                        key={subItem.name}
                                                        onClick={() => {
                                                            router.push(subItem.href);
                                                            setActiveSubmenu(null);
                                                            setIsOpen(false);
                                                        }}
                                                        className={`block w-full text-left text-sm transition-colors ${
                                                            isPathActive(subItem.href)
                                                                ? "text-accent"
                                                                : "text-foreground/70 hover:text-foreground"
                                                        }`}
                                                        aria-current={isPathActive(subItem.href) ? "page" : undefined}
                                                    >
                                                        {subItem.name}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={`block text-sm font-medium transition-colors ${
                                            isMenuItemActive(item) ? "text-accent" : "text-foreground/80 hover:text-foreground"
                                        }`}
                                        onClick={() => setIsOpen(false)}
                                        aria-current={isMenuItemActive(item) ? "page" : undefined}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
