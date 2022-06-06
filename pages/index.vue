<template>
  <div>
    <div id="gjs">
    </div>
  </div>
</template>
<script>
require('grapesjs/dist/css/grapes.min.css')
require('grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css')
require('grapesjs/dist/grapes.min.js')
require('grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.js')
import builder from './builder/builder'
const grapesjs = require('grapesjs')
let editor
export default {
  mounted () {
    editor = grapesjs.init({
      container: '#gjs',
      fromElement: true.valueOf,
      width: 'auto',
      storageManager: false,
      plugins: ['gjs-preset-webpage'],
      pluginsOpts: {
        'gjs-preset-webpage': {
          // options
        }
      },
      storageManager: {
         id: 'gjs-',
        type: 'local',
        autosave: true,
        autoload: true,
        stepsBeforeSave: 1,
        storeComponents: false,
        storeStyles: false,
        storeHtml: true,
        storeCss: true,
        storeAssets: false,    // If autosave enabled, indicates how many changes are necessary before store method is triggered
      },
    })
    builder.addPanels(editor)
    console.log(editor)
  },
}
</script>
