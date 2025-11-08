import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Convert an arbitrary string into a URL-friendly slug.
 * Steps:
 * 1. Normalize (NFKD) & remove diacritical marks (accents)
 * 2. Lowercase
 * 3. Replace & with 'and'
 * 4. Remove apostrophes
 * 5. Replace any sequence of non a-z0-9 characters with a single hyphen
 * 6. Collapse duplicate hyphens & trim leading/trailing hyphens
 *
 * Examples:
 *  slugify('Hello World!') => 'hello-world'
 *  slugify('Élan Vital & Growth') => 'elan-vital-and-growth'
 *  slugify("John's   Car -- Build") => 'johns-car-build'
 *  slugify('  --- Already Sluggy --- ') => 'already-sluggy'
 */
export function slugify(input: string): string {
    if (!input) return "";
    // Normalize & remove combining marks (accents)
    let str = input
        .normalize('NFKD')
        .replace(/[\u0300-\u036f]/g, '');

    str = str.replace(/&/g, ' and ');
    str = str.replace(/["'’]/g, '');

    str = str.toLowerCase();

    // Replace any run of non-alphanumeric characters with hyphen
    str = str.replace(/[^a-z0-9]+/g, '-');

    // Trim & collapse hyphens
    str = str.replace(/^-+|-+$/g, '').replace(/-{2,}/g, '-');

    return str;
}
