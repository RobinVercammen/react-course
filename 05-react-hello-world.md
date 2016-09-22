# Hello World

## Html setup

We beginnen met het aanmaken van ons frame. De `index.html` file. Deze file plaatsen we in de root van onze applicatie (react-rumble).

De inhoud van deze file zou moeten zijn:

```html
<html>
    <head>
        <title>React-Rumble</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
