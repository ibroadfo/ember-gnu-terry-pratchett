/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-gnu-terry-pratchett',
  contentFor: function(type, config){
    if (type === 'head'){
      return '<meta http-equiv="X-Clacks-Overhead" content="GNU Terry Pratchett" />';
    }
  }
};
