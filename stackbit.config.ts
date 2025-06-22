import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
preview
  nodeVersion: '18',
  ssgName: 'custom',
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ['content'],

  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ['content/pages'],
 main
      models: [
        {
          name: 'page',
          type: 'page' preview
          labelField: 'title'
 main
          filePath: 'content/pages/{slug}.md',
          urlPath: '/{slug}',
          fields: [
            { name: 'title', type: 'string', required: true },
 preview
            { name: 'slug', type: 'string', required: true }
          ]
        }
      ]
    })
  ],
  postInstallCommand: 'npm i --no-save @stackbit/types'

            { name: 'body', type: 'markdown' },
          ],
        },
      ],
    }),
  ],
main
});

 


