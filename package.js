Package.describe({
    name: 'universe:admin',
    summary: 'Admin panel for UniCMS.',
    version: '0.1.0',
    readme: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@1.2.1');

    api.use([
        'universe:modules@0.6.7',
        'universe:ui-react@0.1.0',
        'universe:ui-react-menu@0.1.0'
    ]);

    api.addFiles([
        'index.import.js',

        'lib/AdminMenu.import.jsx',

        'components/AdminPanel.import.jsx'
    ]);
});
