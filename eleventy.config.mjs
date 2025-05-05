export default async function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    return {
        dir: {
            input: "views",
            layouts: "_layouts"
        }
    };
};