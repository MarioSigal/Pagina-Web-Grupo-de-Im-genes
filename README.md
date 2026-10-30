# Galería Web - Grupo de Procesamiento de Imágenes

Sitio web interactivo para la visualización y difusión de proyectos de investigación del Grupo de Procesamiento de Imágenes.

## Proyectos destacados
- **Segmentación de Polen (PollenBB16)**: Pipeline YOLO11 + μSAM (Segment Anything Model for Microscopy) para detección y segmentación de granos de polen.
- **Detección de Infiltración Oculta en Glioblastoma (MRI)**: Estrategia combinada de Deep Learning y microservicios para la detección no invasiva de infiltración tumoral oculta en resonancia magnética multiparamétrica preoperatoria (mpMRI) — Dra. Cecilia Ana Suárez (CONICET / FCEN - UBA).
- **Simulador de Trayectorias Físicas de Trompos**: Simulación y visualización física mediante MuJoCo y ecuaciones diferenciales ordinarias.
- **Detección y Clasificación de Semáforos**: Simulación en SUMO y optimización con Aprendizaje por Refuerzo (RL).
- **Reconocimiento de Lengua de Señas (LSA)**: Modelo Bi-GRU + Cross-Attention sobre corpus LSA64.
- **Mapping de Inputs de un Joystick**: Tracking y detección de interacciones con YOLO y MediaPipe.
- **Gate-Shift-Fuse para Reconocimiento de Acciones en Video (GSF)**: Módulo temporal ligero para clasificadores 2D.

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

