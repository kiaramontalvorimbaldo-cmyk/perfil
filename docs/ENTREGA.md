# Entrega del portafolio de Kiara Montalvo

Fecha: 14 de octubre de 2026.

## Resultado por sprint

| Sprint | Resultado |
| --- | --- |
| 0 | Angular CLI y Angular 22.2.2 verificados con Node 24.19.0. Plantilla original integrada, fuentes y bibliotecas cargadas, HttpClient y JSON estáticos. |
| 1 | Barra lateral y menú móvil, scrollspy, Hero con Typed.js, About, footer con atribución, botón de regreso al inicio, preloader y AOS. |
| 2 | Cifras con PureCounter, habilidades con IntersectionObserver y trayectoria desde JSON. |
| 3 | Seis proyectos ficticios con filtros Isotope, ampliación con GLightbox, páginas de detalle, Swiper, seis áreas de interés y testimonios ficticios. Inicialización y limpieza de bibliotecas al cambiar de página. |
| 4 | Reactive Forms y validaciones; envío simulado sin almacenar datos. Mapa ficticio, presentación animada de 8 segundos, audio instrumental de 8 segundos y galería SVG ficticia. |
| 5 | QA en 1440, 768 y 375 px, textos alternativos, etiquetas ARIA, foco visible y reducción de movimiento. Sin fotografías de ejemplo. Metadatos, capturas, README y compilación de producción. |
| 6 | Entrega local, commit Git y scripts de publicación preparados. Publicación autorizada por la usuaria. La subida a GitHub y activación de Pages quedan pendientes de una conexión autenticada de GitHub. |

## Verificación

- Angular y CLI 22.2.2; TypeScript 6.0.3; comprobación de tipos y plantillas estricta, sin `any`.
- 4 pruebas automáticas aprobadas: campos vacíos/espacios, email y mensaje inválidos, simulación correcta y recuperación de carga tras fallo HTTP.
- 25 comprobaciones de navegador aprobadas en producción, con base `/perfil/`: rutas y recarga, enlaces inexistentes, filtros, lightbox, menú móvil, contadores, habilidades, formulario, imágenes y reproducción multimedia.
- Sin errores de JavaScript, advertencias de consola, imágenes rotas ni desbordamiento horizontal en los tamaños comprobados.
- La comparación de `main.css` con el archivo del ZIP confirma el mismo SHA-256: `504DDEFCAD90FA3EC713825C371B5D78846C8FE1A548BC78B240A39149C14803`.
- La referencia del builder devolvió un error de servicio; la fidelidad se basó en los HTML y assets originales incluidos por la usuaria. Se conservaron las clases y el CSS de la plantilla, con adaptaciones funcionales en `src/styles.css`.

## Contenido provisional

Nombre, cumpleaños, edad y centros educativos proceden del archivo proporcionado. El resto se completa con contenido ficticio autorizado o TODO explícitos. Las ilustraciones no son fotografías reales. Los proyectos y testimonios no acreditan trabajos ni recomendaciones reales. Faltan email, teléfono, sitio web y medios personales definitivos.

## Publicación pendiente

Destino: `https://github.com/kiaramontalvorimbaldo-cmyk/perfil.git`.

La revisión automática pidió autorización explícita para publicar el proyecto y sus datos personales. La usuaria la proporcionó el 14 de octubre de 2026. Se intentó publicar con esa autorización, pero Git no pudo acceder a una sesión válida: el gestor de credenciales falló dentro del entorno y su consulta directa no devolvió autenticación utilizable. También se verificó que la integración de GitHub está disponible, pero todavía no está instalada ni conectada. No se subió código ni se activó GitHub Pages.

Después de instalar y conectar GitHub (la autorización ya está dada): subir la rama `main`, ejecutar `npm run deploy`, activar Pages con `gh-pages` y verificar la URL prevista `https://kiaramontalvorimbaldo-cmyk.github.io/perfil/`.

## Archivos entregados

- `perfil-entrega.zip`: fuente, JSON, medios, dependencias de la plantilla, documentación y capturas. Excluye `node_modules`, `dist`, `.angular` y `.git`.
- Carpeta `perfil`: proyecto editable, con dependencias y compilación local disponibles para revisión.
- `README.md`: ejecución, contenido, estructura, decisiones y créditos.
- `docs/qa-browser.json`: evidencia de QA en producción.

Para ejecutar en otro equipo, usar una versión compatible de Node y seguir `npm ci` → `npm start`. Node 24.14.1 no cumple los requisitos de Angular 22.
