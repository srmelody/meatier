Package.describe({
  name: 'cards',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');
  api.addFiles('cards.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('cards');
  api.addFiles('cards-tests.js');
});
