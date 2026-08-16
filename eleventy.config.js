/** @param {import('@11ty/eleventy').UserConfig} eleventyConfig */
module.exports = function (eleventyConfig) {
	const fs = require("fs");
	const path = require("path");

	eleventyConfig.addPassthroughCopy({
		"./public/fonts": "/fonts",
		"./public/img": "/img",
		"./public/robots.txt": "/robots.txt",
	});
	eleventyConfig.addWatchTarget("./public/css/");
	eleventyConfig.addShortcode("inlinedCss", () =>
		fs.readFileSync(path.join(__dirname, "public/css/index.css"), "utf8"),
	);

	eleventyConfig.setBrowserSyncConfig({
		callbacks: {
			ready: function (_err, browserSync) {
				const fs = require("fs");
				const path = require("path");
				browserSync.addMiddleware("*", (req, res) => {
					res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
					res.write(fs.readFileSync(path.join(__dirname, "_site", "404.html")));
					res.end();
				});
			},
		},
	});

	return {
		templateFormats: ["md", "njk", "html"],
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dir: {
			input: "content",
			includes: "../_includes",
			data: "../_data",
			output: "_site",
		},
		pathPrefix: "/",
	};
};
