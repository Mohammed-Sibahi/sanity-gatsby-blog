export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6142218a64f8fd091855285c",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-7ut9ykhf",
                  apiId: "9aa332af-255e-4687-ada8-c604db0ad5a2",
                },
                {
                  buildHookId: "6142218ab569a60acc249b9a",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-zm5gwy2d",
                  apiId: "0d9b1b02-adea-46eb-ae6f-9a29d348aa5e",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Mohammed-Sibahi/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-zm5gwy2d.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
