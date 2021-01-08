// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration
/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  // root:string
  mount: {
    kimchi: "/",
    magic: "/_dist_",
    sass: "/_sass_",
  },
  plugins: ["@snowpack/plugin-postcss", "@snowpack/plugin-sass"],
  // exclude : ['**/node_modules/**/*', '**/web_modules/**/*', '**/.types/**/*'],
  // installOptions: {},
  devOptions: {
    port: 8080,
    fallback: "index.html",
    open: "chrome",
    out: "build",
  },
  // buildOptions: {},
};
