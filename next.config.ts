const nextConfig = {
  eslint: {
    // ❌ Don't run ESLint during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
