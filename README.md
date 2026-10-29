# Galería Web - Grupo de Procesamiento de Imágenes

Sitio web interactivo para la visualización y difusión de proyectos de investigación del Grupo de Procesamiento de Imágenes.

## Proyectos destacados
- **Segmentación de Polen (PollenBB16)**: Pipeline YOLO11 + μSAM (Segment Anything Model for Microscopy) para detección y segmentación de granos de polen.
- **Simulador de Trayectorias Físicas de Trompos**: Simulación y visualización física mediante MuJoCo y ecuaciones diferenciales ordinarias.
- **Detección y Clasificación de Semáforos**.
- **Reconocimiento de Lengua de Señas (LSA)**.
- **Generación de Secuencias con Flujo (GSF)**.

## Estructura del proyecto
- `index.html`: Estructura principal y visualizadores interactivos.
- `styles.css`: Estilos visuales y diseño responsivo.
- `app.js` / `data.js` / `data.json`: Lógica de navegación, carga dinámica de datos e interactividad.
- `assets/`: Recursos multimedia (imágenes, videos, documentos de presentación).

## Visualización local
Puedes abrir directamente el archivo `index.html` en un navegador web o ejecutar un servidor local:
```bash
python -m http.server 8000
```
Y luego acceder a `http://localhost:8000`.

