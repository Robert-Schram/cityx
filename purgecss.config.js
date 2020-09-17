module.exports = {
    content: [
        './src/**/*.vue',
        './src/**/*.js',
        './src/**/*.jsx',
        './src/**/*.html',
        './src/**/*.pug',
        './src/**/*.md',
        './content/**/*.md'
    ],
    whitelist: [
        'body',
        'html',
        'img',
        'a',
        'prose',
        'prose-lg',
        'blockqoute',
        'g-image',
        'g-image--lazy',
        'g-image--loaded',
    ],
    whitelistPatternsChildren: [/prose/],
    extractors: [{
        extractor: content => content.match(/[A-z0-9-:\\/]+/g),
        extensions: ['vue', 'js', 'jsx', 'md', 'html', 'pug'],
    }, ],
}