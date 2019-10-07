import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'is-web-component',
  // excludeSrc: ['**/my-component/**'],
  plugins: [
    sass({
      injectGlobalPaths: [
        './src/global/variables.scss'
      ]
    })
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      copy: [
        { src: '_redirects' },
        { src: '../docs', dest: 'docs'}
      ],
      serviceWorker: null // disable service workers
    }
  ],
  testing: {
    // testPathIgnorePatterns: ['/my-component/']
  }
};
