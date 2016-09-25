# Een webapplictie met react opzetten

Om een webapplicatie te bouwen die react gebruikt moeten we natuurlijk javascript kunnen genereren die door de browser geïnterpreteerd kan worden.
Deze javascript moeten we hopelijk niet zelf genereren. Hiervoor bestaan verschillende tools die dit voor jou doen.

We gaan overlopen hoe je de basis configuratie voor een react applicatie opzet in volgende hoofdstukken.# Node Setup

Onze tools die we gaan gebruiken om javascript te genereren die door de browser verstaan kan worden kunnen we installeren via npm.
Npm is een platform dat ons toelaat om javascript modules te installeren voor zowel gebruik in onze applicatie (react bv.) en programma's op onze computer.
Node kunnen we op verschillende manieren installeren.

## Node version manager

Omdat er verschillende versies van node bestaan is het aangeraden om je applicatie met een bepaalde node versie te maken. In ons geval zal enkel onze tooling hier invloed van ondervinden.
Node version manager kan hier soelaas in brengen. Deze tool laat toe verschillende node versies naast elkaar te gebruiken door het eenvoudig te maken te switchen ertussen.

We installeren node version manager op windows vanaf [Node Version Manager voor windows](https://github.com/coreybutler/nvm-windows/releases/download/1.1.1/nvm-setup.zip).
Voor installatie op OSX en Linux volgen we volgende tutorial [Node Version Manager voor Unix](https://github.com/creationix/nvm#installation).

Na de installatie van deze tool kunnen we de juiste node versie installeren dit doen we door een nieuwe opdrachtprompt of terminal te openen.
Hierin voeren we onderstaande commando's in.

```bash
    $ nvm install 6.5.0
    $ nvm use 6.5.0
``` 

Met node geinstalleerd kunnen we nu onze tooling installeren.
# React tooling

Nu we node geinstalleerd hebben, hebben we de mogelijkheid om onze tooling op te zetten.

## Editor

Om een javascript project uit te voeren hebben we een texteditor nodig. Enkele voorbeelden zijn Visual Studio Code, Sublime, Atom, ...
Handig bij de keuze van je editor is de ondersteuning voor het openen van een folder. Mijn voorkeur gaat uit naar [VS Code](https://www.visualstudio.com/en-us/products/code-vs.aspx).

## Webpack

Hiervoor gaan we gebruik maken van Webpack.
Webpack is de tool die ervoor zal zorgen dat er van de javascript die wij zullen schrijven, javascript zal uitkomen die de browser begrijpt.
Doordat webpack een heel modulair systeem aanbied moeten we gebruik maken van enkele webpack loaders.
Loaders zijn als het ware tussenstappen die uitgevoerd worden tijdens het process van het omvormen van input naar output.

//IDEE VOOR EEN AFBEELDING => FUZZY CODE => LOADERS (GRINDERS) => NON-FUZZY CODE EN BLIJE BROWSER.

Webpack installeren we door volgende commando uit te voeren vanaf de command line.

```bash
$ npm install -g webpack
$ npm install -g webpack-dev-server
```

Door webpack op deze manier te installeren, is het voor ons mogelijk om vanaf de command line het webpack commando op te roepen.
Webpack-dev-server is een applicatie die onze webpack output zal serven tijdens development, om ons het leven als developer eenvoudiger te maken.
Momenteel hebben we al onze tooling geinstalleerd vooraleer we aan een echt project kunnen beginnen.
# React Setup Dependencies
Nu beginnen we aan de echte opzet van de applicatie.

## Folder structuur

Een web applicatie werkt folder gestructureerd. Dit wil zeggen dat een folder als het ware een web project kan zijn.
Om te beginnen kunnen we best een folder maken in een directory. In deze guide gebruik ik de root folder 'projects'.
Ik maak dus in deze folder een folder aan voor dit project 'react-rumble' en ga in deze folder.

```bash
projects/$ mkdir react-rumble
projects/$ cd react-rumble
```

## Web project

Om een leeg project te starten, begin ik door het project als npm project te initialiseren.

```bash
projects/$ npm init -y
```

Zoals je zal zien is er in je folder een file genaamd `package.json` toegevoegd. Deze file wordt gebruikt om o.a. je dependencies in kaart te brengen. Als we deze open doen zien we volgende json staan:

```json
{
  "name": "react-rumble",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

## Dependencies

Nu kunnen we onze dependencies installeren. Voor dit project zullen we webpack, enkele loaders, en react nodig hebben.

### Developer

Eerst voegen we webpack toe aan het project door:

```bash
projects/react-rumble/$ npm install --save-dev webpack webpack-dev-server
```

Vervolgens installeren we de loaders voor het project:
```bash
projects/react-rumble/$ npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
```
Dit zijn al onze dev dependencies. Dev dependencies worden gebruikt tijdens development, voornamelijk tooling. Vandaar de vlag --save-dev. Het is niet de bedoeling dat deze modules gebruikt worden bij de actuele applicatie.

### Project

vervolgens installeren we react en react-dom als echte dependencies aangezien onze applicatie wel degelijk gebruik zal maken van react.

```bash
projects/react-rumble/$ npm install -save react react-dom
```
Als we vervolgens `package.json` nogmaals openen zien we dat al onze dependencies hierin zijn opgeslagen:

```json
{
  "name": "react-rumble",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.14.0",
    "babel-loader": "^6.2.5",
    "babel-preset-es2015": "^6.14.0",
    "babel-preset-react": "^6.11.1",
    "webpack": "^1.13.2",
    "webpack-dev-server": "^1.15.1"
  },
  "dependencies": {
    "react": "^15.3.1",
    "react-dom": "^15.3.1"
  }
}
```

### Source

Om af te sluiten maken we een folder in de root aan om onze applicatiecode in te steken. Deze folder noemen we `src`.

```bash
projects/react-rumble/$ mkdir src
```
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
                loader: 'babel',
                query: {
                    presets: [
                        'react',
                        'es2015'
                    ]
                }
            }
        ]
    }
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
# Hello World

## Html setup

We beginnen met het aanmaken van ons frame. De `index.html` file. Deze file plaatsen we in de root van onze applicatie (react-rumble).

De inhoud van deze file zou moeten zijn:

```html
<html>
    <head>
        <title>React-Rumble</title>
    </head>
    <body>
        <div id="app-root"></div>
        <script src="public/bundle.js" type="text/javascript"></script>
    </body>
</html>
```

## Eerste component

Dan maken we onze eerste react component in de file `index.jsx` die onder de map src valt. In deze file schrijven we een basis component en laten deze renderen in de html.

```javascript
import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <h1>Hallo React Wereld</h1>
        )
    }
}

render(<App/>, document.getElementById('app-root'));

```

## Testen

Wanneer alle files zijn opgeslagen en bovenstaande stappen zijn uitgevoerd moet het mogelijk zijn om via het commando dat ingevoerd wordt in de root van het project een webserver te starten die op poort 8080 luistert. Dit doen we als volgt:

```bash
projects/react-rumble/$ webpack-dev-server
```

Als we hiernaar via onze browser navigeren naar onze webserver op `localhost:8080` worden we verwelkomt met de 'Hallo React Wereld' tekst.

## Besluit

Door het volgen van deze gids heb je succesvol je eerste react project vanaf 0 opgezet. Tools als webpack zorgen ervoor dat onze code die we schrijven door de browser verstaan kan worden.
