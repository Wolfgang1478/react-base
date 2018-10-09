## Plantilla para proyectos de React con Typescript
Para iniciar un servidor de desarrolo, utilizar el comando

```sh
npm run serve
```

El proyecto tiene las siguientes dependencias.

```sh
    "@types/react": "^16.4.16",
    "@types/react-dom": "^16.0.8",
    "html-webpack-plugin": "^3.2.0",
    "react": "^16.5.2",
    "react-dom": "^16.5.2",
    "source-map-loader": "^0.2.4",
    "ts-loader": "^5.2.1",
    "typescript": "^3.1.1",
    "webpack": "^4.20.2",
    "webpack-cli": "^3.1.2",
    "webpack-dev-middleware": "^3.4.0",
    "webpack-dev-server": "^3.1.9",
    "webpack-hot-middleware": "^2.24.3"
```

El archivo src/app/components/Hello.tsx es un componente de ejemplo que genera los primeros 100 números de Fibonacci y los renderiza en una lista no ordenada.    

El archivo src/app/App.tsx es el archivo principal de tsx que hace un llamado al componente Hello.tsx.  

El archivo src/app/index.html es el archivo donde esta el <div id='root'></div> que se usa para renderizar el componente Hello.tsx
