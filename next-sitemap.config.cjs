const {siteConfig} = require("./.sitemap/siteConfig.cjs");
const {newsItems} = require("./.sitemap/newsItems.cjs");

const slugify = (input = "") => {
    return input
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/&/g, " and ")
        .replace(/["'’]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .replace(/-{2,}/g, "-");
};

const siteUrl = process.env.SITE_URL ?? siteConfig.url;

/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl,
    generateRobotsTxt: true,
    sitemapSize: 5000,
    trailingSlash: false,
    transform: async (config, pathname) => ({
        loc: `${siteUrl}${pathname}`,
        changefreq: pathname === "/" ? "weekly" : "monthly",
        priority: pathname === "/" ? 1 : 0.7,
        lastmod: new Date().toISOString(),
    }),
    additionalPaths: async (config) => {
        return Promise.all(
            newsItems.map(async (item) => {
                const slug = slugify(item.title);
                const baseEntry = await config.transform(config, `/news/${slug}`);
                return {
                    ...baseEntry,
                    lastmod: new Date(item.date).toISOString(),
                    changefreq: "monthly",
                    priority: 0.8,
                };
            })
        );
    },
    robotsTxtOptions: {
        policies: [{userAgent: "*", allow: "/"}],
        // additionalSitemaps: [`${siteUrl}/sitemap.xml`],
    },
};

module.exports = config;
