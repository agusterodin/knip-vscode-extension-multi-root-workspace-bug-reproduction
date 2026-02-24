import path from 'path'
import { NextConfig } from 'next'

export default {
  output: 'standalone',
  transpilePackages: ['common'],
  outputFileTracingRoot: path.join(process.cwd(), '../')
} satisfies NextConfig
