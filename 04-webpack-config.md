# Webpack config

Omdat webpack veelvoudig gebruikt kan worden in diverse projecten is configuratie over gelaten aan de developer. Binnen deze configuratie kan je onder andere aangeven welke loaders gebruikt moeten worden en waar de input files zich bevinden. Hieronder gaan we overlopen hoe we deze configuratie opzetten.

## Webpack.config.js

Om te beginnen gaan we een configuratie file aanmaken in de root van je project. We noemen deze file 'webpack.config.js'.
Ik doe dit door mijn editor te openen in deze folder en daarmee een nieuwe file aan te maken met volgende inhoud:

```javascript
var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        './src'
    ],
    output: {
        publicPath: 'public',
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        moduleDirectories: [
            'node_modules',
            'src'
        ],
        extensions: [
            '',
            '.js',
            '.jsx'
        ]
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'react-hot-loader/webpack'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: [
                        'react',
                        'es2015'
                    ]
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
```

### Exports
In de `module.exports` wordt de eigenlijke configuratie uitgevoerd. Om dieper in te gaan op elk van deze configuratieparameters:
- `devtool` bepaald om welke manier de files verwerkt worden. We kiezen hier voor inline-source-map zodat we bij het debuggen toch nog informatie over de originele file kunnen bekijken.
- `entry` bevat de één of meerdere mappen waar Webpack start met zoeken naar files die door de loader moeten gaan
- `output` is de configuratie voor de artefacten die gegenereerd worden na het doorlopen van een webpack cyclus. In onze configuratie gaan die in een public folder terrecht komen onder de naam bundle.js
- `resolve`
    - `moduleDirectories` bevat alle plekken waar Webpack zoekt naar modules
    - `extensions` bevat een lijst van extensies waarin modules geexporteert kunnen worden
- `module` hierin wordt bepaald welke stappen op een module die uit de moduledirectories komt wordt uitgevoerd.
    - `loaders` bevat een lijst van loaders die webpack gaat gebruiken tussen het converteren van input naar output.
