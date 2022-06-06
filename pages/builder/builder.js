export default {
    addBlocks (editor) {
      // basic blocks
      editor.BlockManager.add('text', {
        label: 'Text',
        category: 'Basic',
        attributes: { class: 'gjs-fonts gjs-f-text' },
        content: {
          type: 'text',
          content: 'Insert your text here',
          style: { padding: '10px' },
          activeOnRender: 1,
        },
      })
      editor.BlockManager.add('map', {
        label: 'Map',
        category: 'Basic',
        attributes: { class: 'fa fa-map-o' },
        content: {
          type: 'map',
          style: { height: '350px' },
        },
      })
      editor.BlockManager.add('video', {
        label: 'Video',
        category: 'Basic',
        attributes: { class: 'fa fa-youtube-play' },
        content: {
          type: 'video',
          src: 'img/video2.webm',
          style: {
            height: '350px',
            width: '615px',
          },
        },
      })
      editor.BlockManager.add('image', {
        label: 'Image',
        category: 'Basic',
        attributes: { class: 'gjs-fonts gjs-f-image' },
        content: {
          style: { color: 'black' },
          type: 'image',
          activeOnRender: 1,
        },
      })
      editor.BlockManager.add('link', {
        label: 'Link',
        category: 'Basic',
        attributes: { class: 'fa fa-link' },
        content: {
          type: 'link',
          content: 'Link',
          style: { color: '#d983a6' },
        },
      })
  
      editor.BlockManager.add('column3-7', {
        label: '2 Columns 3/7',
        category: 'Basic',
        attributes: { class: 'gjs-fonts gjs-f-b37' },
        content: `<div class='gjs-row' data-gjs-droppable='.gjs-cell' data-gjs-resizable='{"tl":0,"tc":0,"tr":0,"cl":0,"cr":0,"bl":0,"br":0,"minDim":1}' data-gjs-name='Row'>
        <div  class='gjs-cell' data-gjs-draggable='.gjs-row' data-gjs-resizable='{"tl":0,"tc":0,"tr":0,"cl":0,"cr":1,"bl":0,"br":0,"minDim":1,"bc":0,"currentUnit":1,"step":0.2}' data-gjs-name='Cell' style='width: 30%;'></div>
        <div  class='gjs-cell' data-gjs-draggable='.gjs-row' data-gjs-resizable='{"tl":0,"tc":0,"tr":0,"cl":0,"cr":1,"bl":0,"br":0,"minDim":1,"bc":0,"currentUnit":1,"step":0.2}' data-gjs-name='Cell' style='width: 70%;'></div>
        </div>
        <style>
          
            .gjs-row {
              display: table;
              padding: 10px;
              width: 100%;
            }
            @media (max-width: 768px) {
              .gjs-cell, .gjs-cell30, .gjs-cell70 {
                width: 100%;
                display: block;
              }
            }
          
            .gjs-cell {
              width: 8%;
              display: table-cell;
              height: 75px;
            }
          
          .gjs-cell30 {
            width: 30%;
          }
          
          .gjs-cell70 {
            width: 70%;
          }
        </style>`,
      })
  
      editor.BlockManager.add('column3', {
        label: '3 Columns',
        category: 'Basic',
        attributes: { class: 'gjs-fonts gjs-f-b3' },
        content: `<div  class='gjs-row' data-gjs-droppable='.gjs-cell' data-gjs-resizable='{"tl":0,"tc":0,"tr":0,"cl":0,"cr":0,"bl":0,"br":0,"minDim":1}' data-gjs-name='Row'>
        <div  class='gjs-cell' data-gjs-draggable='.gjs-row' data-gjs-resizable='{"tl":0,"tc":0,"tr":0,"cl":0,"cr":1,"bl":0,"br":0,"minDim":1,"bc":0,"currentUnit":1,"step":0.2}' data-gjs-name='Cell'></div>
        <div  class='gjs-cell' data-gjs-draggable='.gjs-row' data-gjs-resizable='{"tl":0,"tc":0,"tr":0,"cl":0,"cr":1,"bl":0,"br":0,"minDim":1,"bc":0,"currentUnit":1,"step":0.2}' data-gjs-name='Cell'></div>
        <div  class='gjs-cell' data-gjs-draggable='.gjs-row' data-gjs-resizable='{"tl":0,"tc":0,"tr":0,"cl":0,"cr":1,"bl":0,"br":0,"minDim":1,"bc":0,"currentUnit":1,"step":0.2}' data-gjs-name='Cell'></div>
      </div>
      <style>
          
        .gjs-row {
          display: table;
          padding: 10px;
          width: 100%;
        }
        @media (max-width: 768px) {
          .gjs-cell, .gjs-cell30, .gjs-cell70 {
            width: 100%;
            display: block;
          }
        }
          
        .gjs-cell {
          width: 8%;
          display: table-cell;
          height: 75px;
        }
        </style>`,
      })
  
      editor.BlockManager.add('column2', {
        label: '2 Columns',
        attributes: { class: 'gjs-fonts gjs-f-b2' },
        category: 'Basic',
        content: `<div  class='gjs-row' data-gjs-droppable='.gjs-cell' data-gjs-resizable='{"tl":0,"tc":0,"tr":0,"cl":0,"cr":0,"bl":0,"br":0,"minDim":1}' data-gjs-name='Row'>
        <div  class='gjs-cell' data-gjs-draggable='.gjs-row' data-gjs-resizable='{"tl":0,"tc":0,"tr":0,"cl":0,"cr":1,"bl":0,"br":0,"minDim":1,"bc":0,"currentUnit":1,"step":0.2}' data-gjs-name='Cell'></div>
        <div  class='gjs-cell' data-gjs-draggable='.gjs-row' data-gjs-resizable='{"tl":0,"tc":0,"tr":0,"cl":0,"cr":1,"bl":0,"br":0,"minDim":1,"bc":0,"currentUnit":1,"step":0.2}' data-gjs-name='Cell'></div>
      </div>
      <style>
          
        .gjs-row {
          display: table;
          padding: 10px;
          width: 100%;
        }
        @media (max-width: 768px) {
          .gjs-cell, .gjs-cell30, .gjs-cell70 {
            width: 100%;
            display: block;
          }
        }
          
        .gjs-cell {
          width: 8%;
          display: table-cell;
          height: 75px;
        }
        </style>`,
      })
  
      editor.BlockManager.add('column1', {
        label: '1 Columns',
        category: 'Basic',
        attributes: { class: 'gjs-fonts gjs-f-b1' },
        content: `<div  class='gjs-row' data-gjs-droppable='.gjs-cell' data-gjs-resizable='{"tl":0,"tc":0,"tr":0,"cl":0,"cr":0,"bl":0,"br":0,"minDim":1}' data-gjs-name='Row'>
        <div  class='gjs-cell' data-gjs-draggable='.gjs-row' data-gjs-resizable='{"tl":0,"tc":0,"tr":0,"cl":0,"cr":1,"bl":0,"br":0,"minDim":1,"bc":0,"currentUnit":1,"step":0.2}' data-gjs-name='Cell'></div>
      </div>
      <style>
          
    .gjs-row {
      display: table;
      padding: 10px;
      width: 100%;
    }
    @media (max-width: 768px) {
      .gjs-cell, .gjs-cell30, .gjs-cell70 {
        width: 100%;
        display: block;
      }
    }
          
    .gjs-cell {
      width: 8%;
      display: table-cell;
      height: 75px;
    }
        </style>`,
      })
  
      editor.BlockManager.add('link-block', {
        category: 'Basic',
        label: 'Link Block',
        attributes: { class: 'fa fa-link' },
        content: {
          type: 'link',
          editable: false,
          droppable: true,
          style: {
            display: 'inline-block',
            padding: '5px',
            'min-height': '50px',
            'min-width': '50px',
          },
        },
      })
  
      editor.BlockManager.add('quote', {
        label: 'Quote',
        category: 'Basic',
        attributes: { class: 'fa fa-quote-right' },
        content: `<blockquote class="quote">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit
          </blockquote>`,
      })
  
      editor.BlockManager.add('text-basic', {
        category: 'Basic',
        label: 'Text section',
        attributes: { class: 'gjs-fonts gjs-f-h1p' },
        content: `<section class="bdg-sect">
          <h1 class="heading">Insert title here</h1>
          <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </section>`,
      })
    },
    addPanels (editor) {
      editor.Panels.addPanel({
        id: 'panel-top',
        el: '.panel__top',
      })
      editor.Panels.addPanel({
        id: 'basic-actions',
        el: '.panel__basic-actions',
        buttons: [
          {
            id: 'visibility',
            active: true,
            className: 'btn-toggle-borders',
            label: '<u>B</u>',
            command: 'sw-visibility',
          },
          {
            id: 'export',
            className: 'btn-open-export',
            label: 'Exp',
            command: 'export-template',
            context: 'export-template',
          },
          {
            id: 'show-json',
            className: 'btn-show-json',
            label: 'JSON',
            context: 'show-json',
            command (editor) {
              editor.Modal.setTitle('Component JSON')
                .setContent(
                  `<textarea style="width:100%; height: 250px;">
                  ${JSON.stringify(editor.getComponents())}
                  </textarea>`,
                )
                .open()
            },
          },
          {
            id: 'preview-site',
            className: 'btn-preview-site',
            label: 'Preview',
            context: 'preview-site',
            command (editor) {
              const frame = `<iframe src="http://localhost:8081/builder/preview?id=${window.$nuxt.$route.query.id}" style="width:100%; height: 500px;"></iframe>`
              editor.Modal.setTitle('Preview Site')
                .setContent(frame)
                .open()
            },
          },
          {
            id: 'store-template',
            className: 'btn-store-template',
            label: 'Save',
            command: 'store-data',
          },
        ],
      })
    },
    registerCommands (editor) {
      editor.on('run:export-template:before', () => {
        console.log('Before export template')
      })
    },
  }
  