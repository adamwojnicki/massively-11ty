import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default async function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    return {
        dir: {
            input: "views",
            layouts: "_layouts"
        }
    };
};