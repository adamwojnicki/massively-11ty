export default async function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addCollection("navigation", function (collectionApi) {
        // Return all pages with a navigation property in frontmatter
        return collectionApi.getAll().filter(function (item) {
            return item.data.navigation;
        }).sort((a, b) => (a.data.navOrder || 0) - (b.data.navOrder || 0));
    });
    return {
        dir: {
            input: "views",
            layouts: "_layouts"
        }
    };
};