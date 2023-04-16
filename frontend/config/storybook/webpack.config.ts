import path from 'path'
import webpack from 'webpack'
import { BuildPaths } from '../webpack/types/config'

const cssLoader = {
  test: /\.s[ac]ss$/i,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        modules: {
          auto: (resPath: string) => Boolean(resPath.includes('.module.')),
          localIdentName: '[path]_[name]__[local]'
        }
      }
    },
    'sass-loader'
  ]
}

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }

  config.resolve.modules.push(paths.src)
  config.resolve.extensions.push('.ts', '.tsx')

  config.module.rules.push(cssLoader)

  return config
}
