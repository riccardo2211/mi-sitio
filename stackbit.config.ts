import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",

  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content/pages"],
      models: [
        {
          name: "page",
          type: "page",
          label: "Páginas",
          filePath: "content/pages/{slug}.md",
          urlPath: "/{slug}",
          fields: [
            {
              name: "title",
              type: "string",
              required: true,
              label: "Título"
            },
            {
              name: "slug",
              type: "slug",
              from: "title",
              required: true,
              label: "Ruta (slug)"
            },
            {
              name: "body",
              type: "markdown",
              label: "Contenido"
            }
          ]
        }
      ]
    })
  ]
});


