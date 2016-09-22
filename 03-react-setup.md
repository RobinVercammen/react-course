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
projects/react-rumble/$ npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react react-hot-loader
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
