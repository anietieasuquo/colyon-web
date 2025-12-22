"use client";
import {useEffect, useRef, useState} from "react";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {ChevronDown, Menu, X} from "lucide-react";
import {useIsMobile} from "@/hooks/use-mobile";
import AppLogo from "@/components/AppLogo";

// Declarative navigation config keeps future product additions centralized.
type ProductOffering = {
    name: string;
    href: string;
    description?: string;
    audience?: string;
};

type Product = {
    name: string;
    href: string;
    description?: string;
    offerings: ProductOffering[];
};

type SimpleSubmenuItem = {
    name: string;
    href: string;
};

type MenuItem = {
    name: string;
    href?: string;
    submenu?: SimpleSubmenuItem[];
    megaMenu?: Product[];
};

const productCatalog: Product[] = [
    {
        name: "Monchain",
        href: "/talk-to-us?product=monchain-check&about=compliance",
        description: "AI-powered security platform that stops crypto fraud before it happens.",
        offerings: [
            {
                name: "Monchain Check",
                href: "/products/monchain/check",
                description: "Due diligence workflows and enterprise APIs built for wallets, exchanges and financial institutions.",
                audience: "For Businesses",
            },
            {
                name: "Monchain Wallet",
                href: "/products/monchain/wallet",
                description: "AI-powered crypto wallet that stops fraud, plus smart wallet features and trading insights.",
                audience: "For Users",
            },
        ],
    },
];

const menuItems: MenuItem[] = [
    {
        name: "Products",
        megaMenu: productCatalog,
    },
    {
        name: "Company",
        submenu: [
            {name: "About us", href: "/about"},
            {name: "Our mission", href: "/mission"},
            {name: "Careers", href: "/careers"},
        ],
    },
    {name: "Research", href: "/research"},
    {name: "Safety", href: "/safety"},
    {name: "XAI", href: "/xai"},
    {name: "News", href: "/news"},
    {name: "Contact", href: "/contact"},
];

const Navigation = () => {
    const router = useRouter();
    const pathname = usePathname();
    const isMobile = useIsMobile();
    const [isOpen, setIsOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
    const submenuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    const normalizePath = (path?: string | null) => {
        if (!path) return "/";
        return path.replace(/\/+$/, "") || "/";
    };

    const isPathActive = (target?: string) => {
        const current = normalizePath(pathname);
        const goal = normalizePath(target);
        return current === goal || current.startsWith(`${goal}/`);
    };

    const isMenuItemActive = (item: MenuItem) => {
        if (item.megaMenu) {
            return item.megaMenu.some((product) =>
                isPathActive(product.href) || product.offerings.some((offering) => isPathActive(offering.href)));
        }
        if (item.submenu) {
            return item.submenu.some((subItem) => isPathActive(subItem.href));
        }
        return item.href ? isPathActive(item.href) : false;
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
                        {menuItems.map((item) => {
                            const isSingleProductMenu = !!item.megaMenu && item.megaMenu.length === 1;

                            return (
                                <div
                                    key={item.name}
                                    className="relative"
                                    ref={(el) => {
                                        if (item.submenu || item.megaMenu) {
                                            submenuRefs.current[item.name] = el;
                                        }
                                    }}
                                >
                                    {item.megaMenu ? (
                                        <>
                                            <button
                                                onClick={() => setActiveSubmenu(activeSubmenu === item.name ? null : item.name)}
                                                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                                                    isMenuItemActive(item)
                                                        ? "text-accent"
                                                        : "text-foreground/80 hover:text-foreground"
                                                }`}
                                                aria-expanded={activeSubmenu === item.name}
                                                aria-haspopup="true"
                                            >
                                                {item.name}
                                                <ChevronDown
                                                    className={`w-4 h-4 transition-transform ${
                                                        activeSubmenu === item.name ? "rotate-180" : ""
                                                    }`}/>
                                            </button>
                                            {activeSubmenu === item.name && (
                                                <div
                                                    className="absolute top-full left-1/2 z-50 mt-3 -translate-x-1/2"
                                                    role="menu"
                                                    aria-label="Products menu"
                                                >
                                                    <div
                                                        className="w-screen max-w-3xl rounded-2xl border border-border bg-card/95 p-6 shadow-xl animate-fade-in">
                                                        <div
                                                            className={isSingleProductMenu
                                                                ? "flex flex-col gap-6"
                                                                : "grid gap-6 md:grid-cols-2"}>
                                                            {item.megaMenu.map((product) => (
                                                                <div
                                                                    key={product.name}
                                                                    className={`rounded-xl border border-border/60 bg-background/80 p-4 shadow-sm ${
                                                                        isSingleProductMenu ? "md:p-6" : ""
                                                                    }`}
                                                                >
                                                                    <div
                                                                        className="flex items-start justify-between gap-4">
                                                                        <div>
                                                                            <Link
                                                                                href={product.href}
                                                                                className="text-base font-semibold text-foreground transition-colors hover:text-accent"
                                                                                onClick={() => setActiveSubmenu(null)}
                                                                            >
                                                                                {product.name}
                                                                            </Link>
                                                                            {product.description && (
                                                                                <p className="mt-1 text-sm text-muted-foreground">
                                                                                    {product.description}
                                                                                </p>
                                                                            )}
                                                                        </div>
                                                                        <Link
                                                                            href={product.href}
                                                                            className="text-xs font-semibold text-accent hover:underline"
                                                                            onClick={() => setActiveSubmenu(null)}
                                                                        >
                                                                            Explore
                                                                        </Link>
                                                                    </div>
                                                                    <div
                                                                        className={isSingleProductMenu
                                                                            ? "mt-4 grid gap-3 md:grid-cols-2"
                                                                            : "mt-4 space-y-3"}
                                                                    >
                                                                        {product.offerings.map((offering) => (
                                                                            <Link
                                                                                key={offering.name}
                                                                                href={offering.href}
                                                                                className={`block rounded-lg border px-3 py-2 text-left text-sm transition-colors ${
                                                                                    isPathActive(offering.href)
                                                                                        ? "border-accent/60 bg-accent/10 text-accent"
                                                                                        : "border-border/40 bg-card/80 text-foreground/80 hover:border-border hover:bg-background"
                                                                                }`}
                                                                                onClick={() => setActiveSubmenu(null)}
                                                                                aria-current={isPathActive(offering.href) ? "page" : undefined}
                                                                                role="menuitem"
                                                                            >
                                                                                <div
                                                                                    className="flex items-center justify-between gap-3">
                                                                                    <span
                                                                                        className="font-medium">{offering.name}</span>
                                                                                    {offering.audience && (
                                                                                        <span
                                                                                            className="rounded-full border border-border/70 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                                                                                            {offering.audience}
                                                                                        </span>
                                                                                    )}
                                                                                </div>
                                                                                {offering.description && (
                                                                                    <p className="mt-1 text-xs text-muted-foreground">
                                                                                        {offering.description}
                                                                                    </p>
                                                                                )}
                                                                            </Link>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    ) : item.submenu ? (
                                        <>
                                            <button
                                                onClick={() => setActiveSubmenu(activeSubmenu === item.name ? null : item.name)}
                                                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                                                    isMenuItemActive(item)
                                                        ? "text-accent"
                                                        : "text-foreground/80 hover:text-foreground"
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
                            );
                        })}
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
                                {item.megaMenu ? (
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
                                            aria-haspopup="true"
                                        >
                                            {item.name}
                                            <ChevronDown
                                                className={`w-4 h-4 transition-transform ${
                                                    activeSubmenu === item.name ? "rotate-180" : ""
                                                }`}
                                            />
                                        </button>
                                        {activeSubmenu === item.name && (
                                            <div className="pl-4 mt-3 space-y-4">
                                                {item.megaMenu.map((product) => (
                                                    <div
                                                        key={product.name}
                                                        className="rounded-lg border border-border/60 p-3"
                                                    >
                                                        <Link
                                                            href={product.href}
                                                            className="block text-sm font-semibold text-foreground transition-colors hover:text-accent"
                                                            onClick={() => {
                                                                setIsOpen(false);
                                                                setActiveSubmenu(null);
                                                            }}
                                                        >
                                                            {product.name}
                                                        </Link>
                                                        {product.description && (
                                                            <p className="mt-1 text-xs text-muted-foreground">
                                                                {product.description}
                                                            </p>
                                                        )}
                                                        <div className="mt-3 space-y-2">
                                                            {product.offerings.map((offering) => (
                                                                <button
                                                                    key={offering.name}
                                                                    onClick={() => {
                                                                        router.push(offering.href);
                                                                        setActiveSubmenu(null);
                                                                        setIsOpen(false);
                                                                    }}
                                                                    className={`w-full rounded-lg border px-3 py-2 text-left text-sm transition-colors ${
                                                                        isPathActive(offering.href)
                                                                            ? "border-accent/60 bg-accent/10 text-accent"
                                                                            : "border-border/50 bg-card/80 text-foreground/80 hover:border-border hover:bg-background"
                                                                    }`}
                                                                    aria-current={isPathActive(offering.href) ? "page" : undefined}
                                                                >
                                                                    <div
                                                                        className="flex items-center justify-between gap-3">
                                                                        <span>{offering.name}</span>
                                                                        {offering.audience && (
                                                                            <span
                                                                                className="text-[11px] uppercase tracking-wide text-muted-foreground">
                                                                                {offering.audience}
                                                                            </span>
                                                                        )}
                                                                    </div>
                                                                    {offering.description && (
                                                                        <p className="text-xs text-muted-foreground">
                                                                            {offering.description}
                                                                        </p>
                                                                    )}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : item.submenu ? (
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
                                            aria-haspopup="true"
                                        >
                                            {item.name}
                                            <ChevronDown
                                                className={`w-4 h-4 transition-transform ${
                                                    activeSubmenu === item.name ? "rotate-180" : ""
                                                }`}
                                            />
                                        </button>
                                        {activeSubmenu === item.name && (
                                            <div className="pl-4 mt-3 space-y-2">
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
