Package.describe({
  name: 'easy-modals',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Different types of frequently used bootstrap modals. Presentation and functionality easily modifiable.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/CooperCorona/easy-modals',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.4.2');
  api.use('ecmascript');
  api.mainModule('easy-modals.js');
  api.use('peppelg:bootstrap-3-modal');
  api.use('templating', 'client');
  api.addFiles([
      './infoModal.html',
      './infoModal.js',
      './confirmModal.html',
      './confirmModal.js',
      './textModal.html',
      './textModal.js',
      './textModal.css'
  ], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('easy-modals');
  api.mainModule('easy-modals-tests.js');
});
