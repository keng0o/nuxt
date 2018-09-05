module.exports = {
  env: {
    ENDPOINT: process.env.ENDPOINT || 'http://localhost:3000',
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'my-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:400,700',
      },
    ],
  },
  css: ['sanitize.css/sanitize.css', '@/assets/styles/main.scss'],

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },

    babel: {
      presets: [
        'vue-app',
        // '@babel/plugin-proposal-export-default-from',
        // '@babel/plugin-proposal-logical-assignment-operators',
        // ['@babel/plugin-proposal-optional-chaining', { loose: false }],
        // ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
        // [
        //   '@babel/plugin-proposal-nullish-coalescing-operator',
        //   { loose: false },
        // ],
        // '@babel/plugin-proposal-do-expressions',
      ],
    },
  },

  modules: [
    [
      '@nuxtjs/apollo',
      {
        clientConfigs: {
          default: '@/apollo/index.js',
        },
      },
    ],
  ],
}
