// stackbit.config.ts
import type { StackbitConfig } from "@stackbit/sdk";

export default {
  stackbitVersion: "0.6.0",
  contentSources: [
    {
      type: "git",
      repoId: "riccardo2211/mi-sitio",
      contentDir: "content/pages",
    },
  ],
  models: [
    {
      name: "page",
      label: "Página",
      type: "page",
      filePathPattern: "content/pages/{slug}.md",
      fields: [
        { name: "title", type: "string", label: "Título" },
        { name: "body", type: "markdown", label: "Contenido" },
      ],
    },
  ],
} satisfies StackbitConfig;
