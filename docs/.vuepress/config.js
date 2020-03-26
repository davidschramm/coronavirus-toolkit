const fs = require("fs");

module.exports = {
  themeConfig: {
    //logo: "/logo.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Post a Suggestion", link: "#" }
    ],
    sidebar: getSidebar(),
    repo: "zeue/coronavirus-toolkit",
    repoLabel: "Contribute!",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    smoothScroll: true,
    lastUpdated: "Last Updated",
    head: [["link", { rel: "icon", href: "/logo.png" }]],
    sidebarDepth: 4
  },
  title: "Coronavirus Toolkit",
};

function getSidebar() {
  let _fileScan = fs
    .readdirSync(__dirname + "/../", { withFileTypes: true })
    .filter(_x => _x.isFile())
    .map(_x => _x.name);

  let _children = _fileScan.map(function(_x) {
    let returned = "/" + _x.replace(".md", "");

    if (returned.includes("README")) {
      returned = returned.replace("README", "");
    }

    return returned;
  });

  return [
    {
      title: "",
      collapsable: false,
      children: _children
    }
  ];
}
