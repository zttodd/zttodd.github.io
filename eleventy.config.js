export default function (eleventyConfig) {
  // Watch targets
  eleventyConfig.addWatchTarget('src/_assets/css/**/*.css');

  // Copy files
  eleventyConfig.addPassthroughCopy("src/_assets/js/**/*.js");
  eleventyConfig.addPassthroughCopy("src/*.ico");

  // Input directory
  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setIncludesDirectory("_includes");
};