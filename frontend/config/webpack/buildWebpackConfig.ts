import webpack from 'webpack'

import buildLoaders from './buildLoaders'
import buildResolve from './buildResolve'
import { buildPlugins } from './buildPlugins'
import { BuildOptions } from './types/config'
import buildDevServer from './buildDevServer'

export default function buildWebpackConfig (options: BuildOptions): webpack.Configuration {
  const {
    mode,
    paths,
    isDev
  } = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolve(options),
    devServer: isDev ? buildDevServer(options) : undefined
  }
}
