import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				hostname: 'nye-memories.s3.ap-southeast-2.amazonaws.com',
			},
		],
	},
};

export default nextConfig;
