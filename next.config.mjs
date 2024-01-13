/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  excludeDefaultMomentLocales: true,
  webpack: (config, options) => {
    config.module.rules.push(
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
      {
        test: /\.md$/,
        use: "raw-loader",
      }
    )
    return config
  },
}

export default nextConfig
