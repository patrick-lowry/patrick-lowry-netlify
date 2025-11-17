import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      {
        name: "post",
        label: "Blog Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "body",
            label: "Content",
            isBody: true,
            ui: {
              component: "textarea"
            }
          },
        ],
      },
      {
        name: "project",
        label: "Projects",
        path: "content/projects",
        fields: [
          // Basic Information Section
          {
            type: "string",
            name: "type",
            label: "Layout Type",
            options: ["ProjectLayout", "SimpleProjectLayout"],
            ui: {
              component: "select",
            }
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
          {
            type: "string",
            name: "subheader",
            label: "Subheader",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea"
            }
          },
          // Project List Page Section
          {
            type: "image",
            name: "thumbnailImage",
            label: "Thumbnail Image",
            description: "Displayed in project listings",
          },
          {
            type: "string",
            name: "shortDescription",
            label: "Short Description",
            description: "Displayed in project listings",
            ui: {
              component: "textarea"
            }
          },
          // Project Page Section
          {
            type: "image",
            name: "bannerImage",
            label: "Banner Image",
            description: "Displayed at top of project page",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Content",
            isBody: true,
          },
        ],
      },
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "type",
            label: "Type",
          },
          {
            type: "string",
            name: "body",
            label: "Content",
            isBody: true,
            ui: {
              component: "textarea"
            }
          },
        ],
      },
    ],
  },
});
