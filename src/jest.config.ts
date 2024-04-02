// import type { Config } from '@jest/types'
// import nextJest from 'next/jest.js'
 
// const createJestConfig = nextJest({
//   dir: './',
// })
 
// const config: Config = {
//   coverageProvider: 'v8',
//   testEnvironment: 'jsdom'
// }
 
// export default createJestConfig(config)
import type {Config} from 'jest';

const config: Config = {
  verbose: true,
};

export default config;