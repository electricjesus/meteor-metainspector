Package.describe({
  summary: "Node-MetaInspector - Npm package for web scraping purposes. You give it an URL, and it lets you easily get its title, links, images, description, keywords, meta tags"
});

Npm.depends({"node-metainspector": "0.0.1"});

Package.on_use(function (api) {
  api.add_files("lib/metainspector.js", "client");
});
