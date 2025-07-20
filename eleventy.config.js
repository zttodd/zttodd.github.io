export default function (eleventyConfig) {
  // Watch targets
  eleventyConfig.addWatchTarget('src/css/**/*.css');

  // Copy files
  eleventyConfig.addPassthroughCopy("src/*.js");
  eleventyConfig.addPassthroughCopy("src/*.ico");

  // Input directory
  eleventyConfig.setInputDirectory("src");
};