Package.describe({
    name: 'universe:admin',
    summary: 'Admin panel for UniCMS.',
    version: '0.1.1',
    readme: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@1.3');

    api.use([
        'universe:ui-react@0.1.0',
        'universe:ui-react-menu@0.1.0',
        'ecmascript'
    ]);

    api.addFiles([
        'index.js'
    ]);
    api.mainModule('index.js');
});
