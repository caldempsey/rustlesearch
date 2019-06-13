module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: [
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-throw-expressions',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@': '.',
          '@api': './api',
          '@lib': './api/lib',
          '@routes': './api/routes',
          '@middleware': './api/middleware',
        },
      },
    ],
  ],
}