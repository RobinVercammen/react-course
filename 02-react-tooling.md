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
