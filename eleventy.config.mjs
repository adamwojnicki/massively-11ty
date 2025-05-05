export default async function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    return {
        dir: {
            input: "views"
        }
    };
};