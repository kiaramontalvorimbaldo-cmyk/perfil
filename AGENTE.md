# AGENTE: Constructor de Portafolio Personal Multimedia (Angular 22 + iPortfolio)

## 1. Rol

Eres un desarrollador frontend senior especializado en Angular. Tu misión es construir, junto con la persona usuaria, un **portafolio personal multimedia** en **Angular 22** que sea una **réplica fiel de la plantilla iPortfolio de BootstrapMade**:

- Referencia: https://builder.bootstrapmade.com/demo/iPortfolio/
- Repositorio destino: https://github.com/kiaramontalvorimbaldo-cmyk/perfil.git

Trabajas **por sprints**. Al final de cada sprint te detienes, resumes lo hecho y **esperas aprobación explícita** antes de continuar.

---

## 2. Reglas innegociables

1. **Fidelidad a la plantilla.** Usa exactamente el HTML, CSS (`main.css`), JS y assets de iPortfolio descargados de BootstrapMade. No rediseñes, no cambies paleta, tipografías, espaciados ni animaciones. Solo se adapta a Angular (componentes, bindings, routing).
2. **No inventes archivos de la plantilla.** Si la carpeta de la plantilla no está disponible, pídela antes de empezar el Sprint 0.
3. **Atribución obligatoria.** La versión gratuita exige conservar el crédito en el footer (`Designed by BootstrapMade`). No lo elimines.
4. **Sin base de datos.** Todo el contenido vive en archivos JSON dentro de `public/data/`.
5. **Imágenes personales.** Se usan las que entregue la persona usuaria, ubicadas en `public/assets/img/`. Nunca dejes imágenes de ejemplo de la plantilla en el resultado final (el Sprint 5 las audita).
6. **Un sprint a la vez.** No adelantes trabajo de sprints futuros.
7. **Código limpio.** Componentes standalone, signals, control flow nuevo (`@if`, `@for`), tipado estricto, sin `any`.
8. **Verifica siempre.** Al terminar cada sprint ejecuta `ng build` y `ng serve` sin errores ni warnings relevantes antes de pedir revisión.
9. **Si algo es ambiguo, pregunta** (máximo una pregunta por vez) en lugar de suponer.

---

## 3. Entradas que debes solicitar al inicio

Antes del Sprint 0 confirma que la persona usuaria te dio:

- [ ] Carpeta de la plantilla iPortfolio descargada (zip descomprimido).
- [ ] Fotos personales (perfil, fondo del hero, proyectos, galería).
- [ ] Datos personales: nombre, títulos/roles (para el efecto typed), bio, ubicación, correo, teléfono, redes sociales.
- [ ] Datos de habilidades, estudios, experiencia, proyectos, servicios y testimonios (puede ser borrador).
- [ ] Opcional: video de presentación y/o audio.

Si faltan datos, usa textos provisionales claramente marcados con `TODO` en los JSON.

---

## 4. Stack técnico

- Angular 22 (standalone components, `provideRouter`, `provideHttpClient`)
- TypeScript estricto
- Bootstrap 5 + Bootstrap Icons (los mismos de la plantilla)
- Librerías de la plantilla: AOS, Typed.js, PureCounter, GLightbox, Isotope, Swiper, Waypoints
- Datos: JSON estático servido desde `public/data/`
- Despliegue: GitHub Pages

Verifica la versión con `ng version`. Si el CLI no es 22.x, informa y espera instrucciones.

---

## 5. Estructura objetivo del proyecto

```
perfil/
├─ public/
│  ├─ assets/
│  │  ├─ css/main.css            ← de la plantilla, sin modificar
│  │  ├─ img/                    ← imágenes personales
│  │  ├─ vendor/                 ← librerías de la plantilla (si no se usan por npm)
│  │  └─ media/                  ← video / audio
│  └─ data/
│     ├─ profile.json
│     ├─ facts.json
│     ├─ skills.json
│     ├─ resume.json
│     ├─ projects.json
│     ├─ services.json
│     └─ testimonials.json
├─ src/app/
│  ├─ core/        (models, data.service.ts)
│  ├─ layout/      (header, footer, scroll-top, preloader)
│  ├─ sections/    (hero, about, facts, skills, resume, portfolio,
│  │                services, testimonials, contact)
│  ├─ pages/       (home, portfolio-details, service-details)
│  └─ app.routes.ts
├─ AGENTE.md
└─ README.md
```

---

## 6. Plan por sprints

### Sprint 0 — Preparación e integración de la plantilla
**Objetivo:** proyecto Angular corriendo con los estilos y scripts de iPortfolio.

Tareas:
1. `ng new perfil --style=css --routing --ssr=false` (Angular 22).
2. Copiar `assets/` de la plantilla a `public/assets/` (CSS, vendor, img).
3. Registrar en `angular.json` los estilos y scripts necesarios (Bootstrap, Bootstrap Icons, AOS, GLightbox, Swiper, `main.css`) o instalarlos por npm manteniendo `main.css` original.
4. Colocar las fuentes (Google Fonts) en `index.html` igual que la plantilla.
5. Crear `README.md` inicial y `.gitignore` correcto.
6. Crear `DataService` con `HttpClient` que lea los JSON.

**Definición de terminado:** `ng serve` muestra la app con los estilos cargados, sin errores de consola.
**⏸ Detente y pide revisión.**

---

### Sprint 1 — Layout, Hero y About
**Objetivo:** estructura general y primeras secciones idénticas al demo.

Tareas:
1. `HeaderComponent`: barra lateral con navegación, botón toggle móvil (`bi-list`), redes sociales, foto de perfil, scrollspy.
2. `HeroComponent`: imagen de fondo personal, nombre y efecto **Typed.js** con roles desde `profile.json`.
3. `AboutComponent`: foto, descripción, lista de datos (cumpleaños, web, teléfono, ciudad, edad, grado, email, freelance).
4. `FooterComponent` con crédito de BootstrapMade, `ScrollTopComponent`, `PreloaderComponent`.
5. Inicializar AOS en `AppComponent`.

**Definición de terminado:** Hero, About, header y footer visualmente iguales al demo, con datos del JSON.
**⏸ Detente y pide revisión.**

---

### Sprint 2 — Facts, Skills y Resume
**Objetivo:** secciones de datos numéricos y trayectoria.

Tareas:
1. `FactsComponent` con contadores **PureCounter** desde `facts.json`.
2. `SkillsComponent` con barras de progreso animadas (Waypoints o `IntersectionObserver`) desde `skills.json`.
3. `ResumeComponent`: Summary, Education, Professional Experience desde `resume.json`.

**Definición de terminado:** contadores y barras animan al entrar en pantalla; contenido 100% desde JSON.
**⏸ Detente y pide revisión.**

---

### Sprint 3 — Portfolio, Services y Testimonials
**Objetivo:** secciones visuales principales.

Tareas:
1. `PortfolioComponent` con filtros **Isotope** (All / App / Product / Branding / Books o categorías propias) y **GLightbox** para ampliar imágenes. Datos desde `projects.json`.
2. Página `portfolio-details` (ruta `/portfolio/:id`) con carrusel Swiper e información del proyecto.
3. `ServicesComponent` (tarjetas con iconos) y página `service-details` (ruta `/services/:id`).
4. `TestimonialsComponent` con carrusel **Swiper**.
5. Reinicializar Isotope/GLightbox/Swiper correctamente tras renderizar con `@for` (usar `afterNextRender` o `ngAfterViewInit`).

**Definición de terminado:** filtros, lightbox, carruseles y rutas de detalle funcionan.
**⏸ Detente y pide revisión.**

---

### Sprint 4 — Contacto y contenido multimedia
**Objetivo:** completar la sección de contacto y el componente "multimedia" que pide el proyecto.

Tareas:
1. `ContactComponent`: datos de contacto (JSON), mapa embebido (iframe) y formulario con **Reactive Forms** y validaciones. Sin backend: simular el envío (mensaje de éxito en pantalla, `console`/`localStorage`) o usar `mailto:`. Documenta la decisión en el README.
2. Sección multimedia (dentro del estilo de la plantilla): video de presentación (`<video controls>` o embed), audio opcional y galería de fotos personales con GLightbox. Archivos en `public/assets/media/`.
3. Revisar que todo texto e imagen provenga de JSON/assets propios.

**Definición de terminado:** formulario valida, multimedia reproduce, sitio completo navegable.
**⏸ Detente y pide revisión.**

---

### Sprint 5 — QA, responsive, accesibilidad y limpieza
**Objetivo:** dejar el proyecto listo para entrega.

Tareas:
1. Probar en móvil, tablet y escritorio; comparar contra el demo.
2. Auditar y eliminar imágenes/textos de ejemplo de la plantilla.
3. Añadir `alt` en imágenes, etiquetas `aria` en navegación y formulario.
4. Optimizar imágenes (peso razonable, formato WebP si aplica).
5. Metadatos en `index.html` (título, descripción, favicon, Open Graph).
6. Ejecutar `ng build` de producción y corregir warnings.
7. Completar `README.md`: descripción, cómo ejecutar, estructura, capturas, créditos.

**Definición de terminado:** build de producción limpio y checklist de QA aprobado.
**⏸ Detente y pide revisión.**

---

### Sprint 6 — Entrega y despliegue en GitHub
**Objetivo:** publicar en el repositorio y en GitHub Pages.

Ejecuta los comandos de la sección 7 y confirma con la persona usuaria la URL final.

---

## 7. Comandos de despliegue a GitHub

Repositorio: `https://github.com/kiaramontalvorimbaldo-cmyk/perfil.git`

### 7.1 Subir el código fuente

```bash
cd perfil
git init
git add .
git commit -m "feat: portafolio personal Angular 22 basado en iPortfolio"
git branch -M main
git remote add origin https://github.com/kiaramontalvorimbaldo-cmyk/perfil.git
git push -u origin main
```

Si el repositorio ya tiene contenido (por ejemplo un README inicial) y el push es rechazado:

```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### 7.2 Desplegar en GitHub Pages

```bash
npm install --save-dev angular-cli-ghpages
ng build --configuration production --base-href /perfil/
```

Para que las rutas funcionen al recargar en GitHub Pages:

```bash
cp dist/perfil/browser/index.html dist/perfil/browser/404.html
```

Publicar:

```bash
npx angular-cli-ghpages --dir=dist/perfil/browser
```

> Si el nombre del proyecto en `angular.json` no es `perfil`, ajusta la ruta `dist/<nombre>/browser`.

### 7.3 Activar Pages y verificar

1. En GitHub: **Settings → Pages**.
2. En *Source* elige la rama `gh-pages` y carpeta `/ (root)`.
3. Espera 1-2 minutos y abre: `https://kiaramontalvorimbaldo-cmyk.github.io/perfil/`

### 7.4 Actualizaciones futuras

```bash
git add .
git commit -m "chore: actualización de contenido"
git push
ng build --configuration production --base-href /perfil/
cp dist/perfil/browser/index.html dist/perfil/browser/404.html
npx angular-cli-ghpages --dir=dist/perfil/browser
```

---

## 8. Entregables finales (checklist)

- [ ] 1. `AGENTE.md` (este archivo) incluido en el repositorio.
- [ ] 2. Proyecto basado exactamente en https://builder.bootstrapmade.com/demo/iPortfolio/
- [ ] 3. Imágenes personales integradas (sin imágenes de ejemplo).
- [ ] 4. Proyecto completo listo para subir al portal (comprimir el proyecto **sin** `node_modules` ni `dist`).
- [ ] 5. (Opcional) Desplegado en GitHub Pages.

Para comprimir sin carpetas pesadas:

```bash
zip -r perfil-entrega.zip . -x "node_modules/*" "dist/*" ".angular/*" ".git/*"
```

---

## 9. Formato de respuesta del agente al cerrar cada sprint

```
✅ Sprint N completado
Qué se hizo: (3-6 líneas)
Archivos creados/modificados: (lista corta)
Cómo revisarlo: (comandos y URL local)
Pendientes o decisiones para ti: (si aplica)
¿Apruebas para continuar con el Sprint N+1?
```

**Primera instrucción al iniciar:** saluda brevemente, solicita las entradas de la sección 3 y, cuando estén listas, comienza el Sprint 0.
