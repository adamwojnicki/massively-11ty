export default async function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("views/images");
    eleventyConfig.addCollection("navigation", function (collectionApi) {
        return collectionApi.getAll().filter(function (item) {
            return item.data.navigation;
        }).sort((a, b) => (a.data.navigation.position || 0) - (b.data.navigation.position || 0));
    });
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return dateObj.toLocaleString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    });
    return {
        dir: {
            input: "views",
            layouts: "_layouts"
        }
    };
};