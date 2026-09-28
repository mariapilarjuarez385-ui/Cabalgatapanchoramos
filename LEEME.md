# Web Cabalgata Pancho Ramos

## Qué editar
- **js/config.js** → datos centrales: nombre, fecha, lugar, Instagram, email, formulario, video y mapa.
- **js/content.js** → cronograma, recorrido, "Antes de participar", preguntas frecuentes, galería e Instagram.
  Todo lo que diga `[COMPLETAR]` aparece marcado en la web hasta que lo reemplaces.
- **index.html** → textos de las secciones. En el `<head>`: title, description, Open Graph y schema del evento
  (reemplazá `[COMPLETAR-DOMINIO]` por el dominio real).
- **img/** → fotos en dos tamaños (`nombre-640.webp` y `nombre-1280.webp`), logos, favicon y `og-image.jpg`.

## Video y mapa
- Reel: subí el .mp4 a la carpeta y poné la ruta en `VIDEO_URL`, o un link embed de YouTube.
- Mapa: en Google My Maps armá el recorrido → Compartir → Insertar → copiá el link del `src` en `MAP_EMBED_URL`.

## Publicar
Es una web estática: subí la carpeta completa a Netlify, Vercel, GitHub Pages o el hosting del dominio.

Fotos: María Barragán Fotografía (Edición 2025).

Antes de publicar en un dominio propio: reemplazá `[COMPLETAR-DOMINIO]` en el `<head>` de index.html.
