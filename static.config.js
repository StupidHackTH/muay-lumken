import React, {Component} from 'react'
import {extractCritical} from 'emotion-server'

import webpack from './webpack.config.js'

const siteRoot = 'https://muay.netlify.com'

class Document extends Component {
  render() {
    const {Html, Head, Body, children, renderMeta} = this.props

    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Axi Platform</title>

          <style dangerouslySetInnerHTML={{__html: renderMeta.css}} />

          <link
            to="https://fonts.googleapis.com/css?family=Kanit:300,400"
            rel="stylesheet"
          />
        </Head>
        <Body>{children}</Body>
      </Html>
    )
  }
}

export default {
  siteRoot,
  webpack,
  Document,
  getRoutes: async () => [
    {
      path: '/',
      component: 'src/landing',
    },
    {
      is404: true,
      component: 'src/not-found',
    },
  ],
  renderToHtml: (render, Comp, meta) => {
    const html = render(<Comp />)
    meta.css = extractCritical(html).css
    return html
  },
  disableRouteInfoWarning: true,
}
