export default async function (eleventyConfig) {
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
    eleventyConfig.addPassthroughCopy({ "public": "/" });
    eleventyConfig.addPassthroughCopy("src/assets");
    return {
        dir: {
            input: "src",
            layouts: "../_includes/layouts",
            includes: "../_includes",
            data: "/data",
        }
    };
};