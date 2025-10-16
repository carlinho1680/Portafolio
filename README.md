# Portafolio Personal - React (Entrega evaluación DSY1104)

Proyecto listo para GitHub Pages con:
- React + Vite
- Bootstrap
- Datos cargados desde JSON (`/data/projects.json`, `/data/news1.json`, `/data/news2.json`)
- Pruebas unitarias con Jasmine + Karma (via webpack + babel-loader)
- Script para ejecutar tests: `npm run test`

## Estructura principal
- `src/` - código React
- `data/` - archivos JSON con proyectos y noticias
- `assets/` - imágenes placeholder (SVG data URIs)
- `tests/` - pruebas unitarias (Jasmine)

## Instalación (local)
1. Clona o descarga el proyecto.
2. Ejecuta:
```bash
npm install
```
> Nota: `npm install` instalará Vite y Karma/Jasmine junto a webpack y babel-loader. Esto puede tardar.

## Desarrollo
```bash
npm run dev
# luego abrir http://localhost:5173
```

## Ejecutar pruebas (Jasmine + Karma)
```bash
npm run test
```
Esto ejecuta Karma en ChromeHeadless (asegúrate de tener Chrome/Chromium instalado). Los reportes de cobertura se generan en `coverage/`.

## Despliegue a GitHub Pages
Puedes usar `gh-pages` o el propio flujo de Vite. Un flujo simple:
1. Genera producción: `npm run build`
2. Subir la carpeta `dist/` a la rama `gh-pages` (o usar la integración de GitHub Pages).

## Observaciones y recomendaciones
- En esta entrega la app de desarrollo usa Vite (rápido). Para las pruebas se incluye una configuración de Karma que usa webpack y babel para transformar JSX a JS entendible por el runner de Karma.
- Si prefieres usar Jest (predeterminado en muchas plantillas CRA) puedo adaptar las pruebas a Jest + React Testing Library (más moderno). Sin embargo la pauta pide explícitamente Jasmine+Karma, por eso se configuró Karma.
- Adapta `assets/profile.jpg` por tu foto profesional y actualiza `README.md` y `src/components/Intro.jsx` con tu nombre real.
