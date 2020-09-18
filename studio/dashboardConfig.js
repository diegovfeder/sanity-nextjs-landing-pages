export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f64b41e042c38346175953e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-rub92ppd',
                  apiId: 'b90fd810-29bc-4621-acb2-f14924ad641e'
                },
                {
                  buildHookId: '5f64b41e521ed5359356b2fd',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-me5m7upr',
                  apiId: 'c513a4c0-aa4d-4458-98f6-16149d7941bd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/diegovfeder/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-me5m7upr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
