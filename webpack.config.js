import webpack from 'webpack'
import OfflinePlugin from 'offline-plugin'
import WebpackPwaManifest from 'webpack-pwa-manifest'
import UglifyJSPlugin from 'uglifyjs-webpack-plugin'

// {
//   src: path.resolve('src/assets/icon.png'),
//   sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
// }

const manifest = {
  name: 'Axi Platform',
  display: 'standalone',
  short_name: 'Axi',
  description: 'Axi Platform. Everywhere, Instantly.',
  background_color: '#ffffff',
  icons: [],
  orientation: 'portrait',
  start_url: '.',
  inject: false,
  ios: false,
  fingerprints: true,
  filename: 'manifest.json',
  // publicPath: null,
}

export default function(config, {stage}) {
  if (stage !== 'dev') {
    // prettier-ignore
    const index = config.plugins.findIndex(x => x instanceof webpack.optimize.UglifyJsPlugin)

    // Fix UglifyJS build errors
    if (config.plugins[index]) {
      config.plugins.splice(index, 1)
      config.plugins.push(new UglifyJSPlugin())
    }
  }

  if (stage === 'prod') {
    config.plugins.push(new WebpackPwaManifest(manifest))
    config.plugins.push(new OfflinePlugin())
  }

  // return config
}
