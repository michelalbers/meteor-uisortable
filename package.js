Package.describe({
  name: 'interwebs:ui-sortable',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Wrapper for angular ui-sortable (https://github.com/angular-ui/ui-sortable)',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use('urigo:angular');
  api.use('mizzao:jquery-ui');
  api.addFiles('sortable.js', ['client']);
});