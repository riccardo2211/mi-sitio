import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  nodeVersion: '18',
  ssgName: 'custom',
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ['content'],
      models: [
        {
          name: 'page',
          type: 'page',
          labelField: 'title',
          filePath: 'content/pages/{slug}.md',
          urlPath: '/{slug}',
          fields: [
            { name: 'title', type: 'string', required: true },
            { name: 'slug', type: 'string', required: true }
          ]
        }
      ]
    })
  ],
  postInstallCommand: 'npm i --no-save @stackbit/types'
});

 


