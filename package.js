Package.describe({
    name: 'universe:admin',
    summary: 'Admin panel for UniCMS.',
    version: '0.1.0',
    readme: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@1.2.1');

    api.use([
        'modules@0.5.0-modules.8',
        'ecmascript@0.4.0-modules.8',
        'universe:ui-react@0.1.0',
        'universe:ui-react-menu@0.1.0',
    ]);

    api.addFiles([
        'index.js',
        'lib/AdminMenu.jsx',
        'components/AdminPanel.jsx'
    ]);

    api.mainModule('index.js');
});
