const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
    staticImage: true,
    latex: true,
    flexSearch: {
        codeblocks: false
    },
    defaultShowCopyCode: true
});

module.exports = withNextra({});