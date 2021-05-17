import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css';
import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min';

class Builder {
  constructor(config) {
    this.config = config;
  }

  destroy() {
    this.editor.destroy();
  }

  init() {
    this.editor = grapesjs.init({
      container: '#builderContainer',
      plugins: ['gjs-preset-webpage'],
      allowScripts: 1,
      // canvas: {
      // ...staticAssets,
      // },
      // css: GlobalStyles,
      // noticeOnUnload: 0,
      storageManager: {
        urlStore: this.config.urlStore,
        urlLoad: this.config.urlLoad,
        autosave: false,
        type: 'remote',
        headers: {
          Authorization: this.config.token,
        },
      },
      assetManager: {
        assets: [
          'http://placehold.it/350x250/78c5d6/fff/image1.jpg',
          // Pass an object with your properties
          {
            type: 'image',
            src: 'http://placehold.it/350x250/459ba8/fff/image2.jpg',
            height: 350,
            width: 250,
          },
          {
            // As the 'image' is the base type of assets, omitting it will
            // be set as `image` by default
            src: 'http://placehold.it/350x250/79c267/fff/image3.jpg',
            height: 350,
            width: 250,
          },
        ],
      },
    });
    this.editor.DomComponents.addType('component', {
      model: {
        defaults: {
          tagName: 'div',
          draggable: true, // Can be dropped only inside `form` elements
          droppable: false, // Can't drop other elements inside
          attributes: { // Default attributes
            id: 'main-block',
          },
          content: 'dsgjnkdfng',
          traits: [
            'id',
          ],
        },
      },
    });
    this.editor.BlockManager.add('component', {
      label: `<div className="preview-container" title="kek" draggable="true">
          <div className="gjs-block-label">kek</div>
      </div>`,
      content: { type: 'component' },
      category: 'custom-component',
    });
  }
}

export default Builder;
