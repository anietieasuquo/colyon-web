'use client';
import React from 'react';
import Link from 'next/link';
import {ExternalLink} from 'lucide-react';

interface AutoLinkTextProps {
    text: string;
    /** Optional class applied to each paragraph <p> */
    paragraphClassName?: string;
    /** Optional class applied to anchor / Link elements */
    linkClassName?: string;
    /** If true, treat same-origin absolute URLs as internal and render Next Link */
    treatSameOriginAsInternal?: boolean;
}

// Simple URL regex capturing http(s) URLs until whitespace or closing punctuation.
// We'll post-process trailing punctuation so it does not become part of the href.
const URL_REGEX = /(https?:\/\/[^\s]+?)([.,!?)]?(?:\s|$))/g; // captures URL + optional trailing punctuation+delimiter
const WORDED_URL_REGEX = /(link?:\/\/[^\s]+?)([.,!?)]?(?:\s|$))/g; // captures URL + optional trailing punctuation+delimiter

function getWindowOrigin() {
    if (typeof window === 'undefined' || !window.location) {
        return undefined;
    }
    return window.location.origin;
}

function parseBracketedLink(raw: string) {
    const match = raw.match(/^(link?:\/\/[^\[]+)(\[[^\]]+\])?/);
    if (!match) return {link: raw, text: raw};
    const link = match[1].replace('link://', 'https://');
    const text = match[2] ? match[2].slice(1, -1) : link;
    return {link, text};
}

function isExternal(href: string, currentOrigin?: string): boolean {
    try {
        const url = new URL(href);
        if (!currentOrigin) return true;
        return url.origin !== currentOrigin;
    } catch {
        return false; // treat malformed as internal/no-op
    }
}

export const AutoLinkText: React.FC<AutoLinkTextProps> = ({
                                                              text,
                                                              paragraphClassName,
                                                              linkClassName,
                                                              treatSameOriginAsInternal = true
                                                          }) => {
    if (!text) return null;
    const origin = getWindowOrigin();

    // Split paragraphs by double newline; keep empty paragraphs if any
    const paragraphs = text.split(/\n\n+/);

    return (
        <>
            {paragraphs.map((para, pIndex) => {
                // Inside a paragraph, preserve single newlines with <br/>.
                const lines = para.split(/\n/);
                return (
                    <p
                        key={pIndex}
                        className={paragraphClassName}
                    >
                        {lines.map((line, lIndex) => {
                            // Replace URLs in the line with React elements.
                            const parts: React.ReactNode[] = [];
                            let lastIndex = 0;
                            line.replace(
                                URL_REGEX,
                                (match, urlPart: string, tail: string, offset: number) => {
                                    // tail contains punctuation plus whitespace or end. We need to separate trailing punctuation from delimiter.
                                    const punctuationMatch = tail.match(/^[.,!?)]/);
                                    const punctuation = punctuationMatch
                                        ? punctuationMatch[0]
                                        : '';
                                    const delimiter = tail.slice(punctuation.length); // whitespace or end

                                    // Push preceding text
                                    if (offset > lastIndex) {
                                        parts.push(line.slice(lastIndex, offset));
                                    }

                                    // Decide link type
                                    const external = isExternal(urlPart, origin);
                                    const sameOrigin = !external;
                                    const shouldUseNextLink =
                                        treatSameOriginAsInternal &&
                                        sameOrigin &&
                                        urlPart.startsWith('http');

                                    if (shouldUseNextLink) {
                                        try {
                                            const urlObj = new URL(urlPart);
                                            parts.push(
                                                <Link
                                                    href={urlObj.pathname + urlObj.search + urlObj.hash}
                                                    className={linkClassName}
                                                    key={`link-${pIndex}-${lIndex}-${offset}`}
                                                >
                                                    {urlPart}
                                                </Link>
                                            );
                                        } catch {
                                            parts.push(urlPart); // fallback
                                        }
                                    } else {
                                        parts.push(
                                            <a
                                                href={urlPart}
                                                className={linkClassName}
                                                key={`link-${pIndex}-${lIndex}-${offset}`}
                                                {...(external
                                                    ? {
                                                        target: '_blank',
                                                        rel: 'noopener noreferrer'
                                                    }
                                                    : {})}
                                            >
                                                {urlPart}
                                                {external && (
                                                    <>
                                                        <ExternalLink
                                                            className='ml-1 inline-block h-[0.9em] w-[0.9em] align-[-0.15em] opacity-80'
                                                            aria-hidden='true'
                                                        />
                                                        <span className='sr-only'>
                              {' '}
                                                            (opens in a new tab)
                            </span>
                                                    </>
                                                )}
                                            </a>
                                        );
                                    }

                                    // Append punctuation if any
                                    if (punctuation) parts.push(punctuation);
                                    // Update lastIndex
                                    lastIndex = offset + match.length - delimiter.length; // exclude delimiter chars from match advancement if whitespace

                                    // Return match unchanged; we're not using its return value
                                    return match;
                                }
                            );

                            line.replace(
                                WORDED_URL_REGEX,
                                (match, urlPart: string, tail: string, offset: number) => {
                                    // tail contains punctuation plus whitespace or end. We need to separate trailing punctuation from delimiter.
                                    const punctuationMatch = tail.match(/^[.,!?)]/);
                                    const punctuation = punctuationMatch
                                        ? punctuationMatch[0]
                                        : '';
                                    const delimiter = tail.slice(punctuation.length); // whitespace or end

                                    // Push preceding text
                                    if (offset > lastIndex) {
                                        parts.push(line.slice(lastIndex, offset));
                                    }

                                    const {link, text: linkText} = parseBracketedLink(urlPart);

                                    // Decide link type
                                    const external = isExternal(link, origin);
                                    const sameOrigin = !external;
                                    const shouldUseNextLink =
                                        treatSameOriginAsInternal &&
                                        sameOrigin &&
                                        link.startsWith('http');

                                    if (shouldUseNextLink) {
                                        try {
                                            const urlObj = new URL(link);
                                            parts.push(
                                                <Link
                                                    href={urlObj.pathname + urlObj.search + urlObj.hash}
                                                    className={linkClassName}
                                                    key={`link-${pIndex}-${lIndex}-${offset}`}
                                                >
                                                    {linkText}
                                                </Link>
                                            );
                                        } catch {
                                            parts.push(link); // fallback
                                        }
                                    } else {
                                        parts.push(
                                            <a
                                                href={link}
                                                className={linkClassName}
                                                key={`link-${pIndex}-${lIndex}-${offset}`}
                                                {...(external
                                                    ? {
                                                        target: '_blank',
                                                        rel: 'noopener noreferrer'
                                                    }
                                                    : {})}
                                            >
                                                {linkText}
                                                {external && (
                                                    <>
                                                        <ExternalLink
                                                            className='ml-1 inline-block h-[0.9em] w-[0.9em] align-[-0.15em] opacity-80'
                                                            aria-hidden='true'
                                                        />
                                                        <span className='sr-only'>
                              {' '}
                                                            (opens in a new tab)
                            </span>
                                                    </>
                                                )}
                                            </a>
                                        );
                                    }

                                    // Append punctuation if any
                                    if (punctuation) parts.push(punctuation);
                                    // Update lastIndex
                                    lastIndex = offset + match.length - delimiter.length; // exclude delimiter chars from match advancement if whitespace

                                    // Return match unchanged; we're not using its return value
                                    return match;
                                }
                            );

                            // Append any remaining text after last processed URL
                            if (lastIndex < line.length) {
                                parts.push(line.slice(lastIndex));
                            }

                            return (
                                <React.Fragment key={lIndex}>
                                    {parts}
                                    {lIndex < lines.length - 1 && <br/>}
                                </React.Fragment>
                            );
                        })}
                    </p>
                );
            })}
        </>
    );
};

export default AutoLinkText;
