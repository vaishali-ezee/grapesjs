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
      }
    })
    builder.addPanels(editor)
    console.log(editor)
  },
}
</script>
