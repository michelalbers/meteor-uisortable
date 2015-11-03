Package.describe({
  name: 'interwebs:ui-sortable',
  version: '1.0.0',
  summary: 'Wrapper for angular ui-sortable (https://github.com/angular-ui/ui-sortable)',
  git: 'https://github.com/michelalbers/meteor-uisortable',
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use('urigo:angular@1.0.4');
  api.use('mizzao:jquery-ui@1.11.4');
  api.addFiles('sortable.js', ['client']);
});
