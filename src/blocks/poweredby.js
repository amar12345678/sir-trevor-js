"use strict";

/*
  Text Block
*/

var Block = require('../block');
var stToHTML = require('../to-html');

var ScribeTextBlockPlugin = require('./scribe-plugins/scribe-text-block-plugin');
var ScribePastePlugin = require('./scribe-plugins/scribe-paste-plugin');

module.exports = Block.extend({
 
  type: "poweredby",

  title: function() { return i18n.t('blocks:poweredby:title'); },

  editorHTML: '<div class="st-poweredby-block" style="text-align: center;">Powered By Lifecycle</div>',

  icon_name: 'text',

  textable: true,

  controllable: true,

  configureScribe: function(scribe) {
    scribe.use(new ScribeTextBlockPlugin(this));
    scribe.use(new ScribePastePlugin(this));
  },

  scribeOptions: { 
    allowBlockElements: true,
    tags: {
      p: true,
      span: true
    }
  },

  loadData: function(data){
    if (this.options.convertFromMarkdown && data.format !== "html") {
      this.setTextBlockHTML(stToHTML(data.text, this.type));
    } else {
      this.setTextBlockHTML(data.text);
    }
  }
});
