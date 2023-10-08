/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["tsx", "ts", "jsx", "js", "mdx", "md"],
	experimental: {
		typedRoutes: true, // użycie typów w routingu, pokazanie przykładowych routów
		mdxRs: true, // użycie mdx w komponentach reactowych
	},
};
const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
