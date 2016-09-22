# Node Setup

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
