window.EagerLivefyre = {
  init: function(element, options) {
    element.innerHTML = '' +
      '<div id="livefyre"></div>';

    var networkConfig = {
      network: 'livefyre.com'
    };

    var convConfig = {
      app: 'main',
      siteId: options.siteid,
      articleId: options.articleid,
      el: 'livefyre',
      checksum: options.checksum,
      collectionMeta: options.collectionmeta
    };

    Livefyre.require(['fyre.conv#3'], function(Conv) {
      new Conv(networkConfig, [convConfig], function(commentsWidget) {}());
    });
  }
};