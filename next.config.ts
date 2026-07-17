import type {NextConfig} from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname, './'),
  devIndicators: false,
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Allow access to remote image placeholder.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**', // This allows any path under the hostname
      },
    ],
  },
  output: 'standalone',
  transpilePackages: ['motion'],
  webpack: (config, {dev}) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modify—file watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }

    // Pin animation packages to project-local node_modules.
    // The parent directory /Users/rahuldangi has its own node_modules with react, framer-motion etc.
    // which leak into webpack resolution and cause "__webpack_modules__[moduleId] is not a function".
    // Do NOT alias react/react-dom here — that breaks Next.js server components.
    // Instead, prioritize this project's node_modules first in the resolution order,
    // and explicitly alias the animation libraries that are known to conflict.
    const localModules = path.resolve(__dirname, 'node_modules');
    config.resolve.modules = [localModules, 'node_modules'];
    config.resolve.alias = {
      ...config.resolve.alias,
      'framer-motion': path.resolve(localModules, 'framer-motion'),
      'motion': path.resolve(localModules, 'motion'),
    };

    return config;
  },
};

export default nextConfig;
