/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["green-yera.com"],
		loader: "custom",
		path: "/",
	},
};

module.exports = nextConfig
// {
//         protocol: 'https',
//         hostname: 'green-yera',
//         port: '3000',
//         pathname: '/',
//       },