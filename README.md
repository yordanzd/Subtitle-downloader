# Buscador de Subtítulos

Aplicación web para buscar y descargar subtítulos de películas y series usando la API REST de [OpenSubtitles](https://www.opensubtitles.com)

## Características
- Búsqueda de subtítulos por título de película o serie
- Filtro por idioma
- Resultados con información de descargas y formato
- Descarga directa del archivo `.srt`

## Tecnologías
- HTML5
- CSS3 (Variables CSS, Flexbox)
- JavaScript vanilla (Fetch API, async/await)
- [OpenSubtitles API](https://opensubtitles.spotlight.io/docs/opensubtitles-api)

## Estructura del proyecto


```
subtitle-downloader/
├── index.html    # Estructura de la página
├── styles.css    # Estilos y paleta de colores
└── script.js     # Lógica de la aplicación
```

## Como usarlo

1. Clona el repositorio:
  ```bash
git clone https://github.com/yordanzd/Subtitle-downloader.git
```
2. Obten tu propia API Key en [OpenSubtitles API](https://opensubtitles.com/en/consumers)
3. Abre `script.js` y reemplaza el valor de `API_KEY` con tu clave:
   ```javascript
   const API_KEY = 'Tu-Api-Key';
   ```
4. Abre `index.html` en tu navegador

## Como funciona 
- El usuario escribe el título y selecciona el idioma

- La app consulta el endpoint /subtitles de la API con esos parámetros

- Se muestran los resultados en tarjetas con nombre, idioma y número de descargas

- Al dar clic en "Descargar", la app pide el link de descarga al endpoint /download y descarga el archivo .srt directamente

## Notas
- Este proyecto usa la API KEY directamente en el JavaScript del cliente, pensado solo para pruebas locales. Para producción se recomienda manejar la key desde un backend

- Poco a poco se irán poniendo más lenguajes
