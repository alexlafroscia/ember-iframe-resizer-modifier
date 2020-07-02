"use strict";

const path = require("path");
const Funnel = require("broccoli-funnel");
const mergeTrees = require("broccoli-merge-trees");

const iframeResizerDirectory = path.dirname(require.resolve("iframe-resizer"));

module.exports = {
  name: require("./package").name,

  treeForPublic(existingPublicTree) {
    const trees = [];

    if (existingPublicTree) {
      trees.push(existingPublicTree);
    }

    trees.push(
      Funnel(iframeResizerDirectory, {
        srcDir: "/",
        include: ["**/*.js", "**/*.map"],
        destDir: "iframe-resizer",
      })
    );

    return mergeTrees(trees);
  },
};
