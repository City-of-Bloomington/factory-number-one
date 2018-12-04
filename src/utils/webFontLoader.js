/**
 * Web Font Loader takes care of Vue Design System’s font loading.
 * For full documentation, see: https://github.com/typekit/webfontloader
 */
import WebFont from "webfontloader"

WebFont.load({
  google: {
    families: ["Fira+Sans:300,400,400i,600,700", "IBM+Plex+Sans:400,500,500i,600,700"],
  },
})
