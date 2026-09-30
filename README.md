# Sitio web — Silvina Lizarraga

Sitio estático construido con [Astro](https://astro.build). El resultado es HTML, CSS e imágenes
optimizadas que se publican en el hosting actual (cPanel, Atlantica Digital) sin necesidad de PHP.

- Contenido y criterios: `silvina_lizarraga_web_v1_ux_ui_handoff.md`
- Diseños aprobados de referencia: `docs/diseno/`

## Desarrollo

```bash
npm install
npm run dev       # servidor local en http://localhost:4321
npm run build     # genera el sitio en dist/
npm run preview   # sirve dist/ localmente
```

## Estructura

| Ruta | Archivo |
|---|---|
| `/` | `src/pages/index.astro` |
| `/psicoterapia-individual/` | `src/pages/psicoterapia-individual.astro` |
| `/terapia-de-pareja/` | `src/pages/terapia-de-pareja.astro` |
| `/sexologia-clinica/` | `src/pages/sexologia-clinica.astro` |
| `/sobre-mi/` | `src/pages/sobre-mi.astro` |
| `/contacto/` | `src/pages/contacto.astro` |

- Datos generales (nombre, WhatsApp, matrícula, menú): `src/data/site.ts`
- Estilos y paleta: `src/styles/global.css`
- Imágenes: `src/assets/img/` (Astro genera versiones AVIF/WebP en varios tamaños al compilar)
- Marca manuscrita "Recalcular también es parte del camino.": `src/assets/marca-recalcular.svg`
- Configuración del servidor (HTTPS, redirecciones, caché): `public/.htaccess`

## Publicación en cPanel

1. **Backup completo** del `public_html` actual (Administrador de archivos → comprimir y descargar).
2. `npm run build`.
3. Subir **el contenido** de `dist/` (incluido el archivo oculto `.htaccess`) a `public_html`.
4. Quitar del `public_html` los archivos del sitio anterior (Mobirise) **después** de tener las
   redirecciones cargadas en `.htaccess`. No tocar carpetas del sistema ni nada relacionado con el correo.
5. Verificar que el certificado SSL esté activo (cPanel → SSL/TLS Status / AutoSSL).
6. Enviar `https://sexualidad-activa.com/sitemap-index.xml` en Google Search Console.

## Pendientes

- Redirecciones de las URLs del sitio anterior (`public/.htaccess`).
- Mención de la AISM en "Formación y trayectoria" (`src/pages/sobre-mi.astro`).
- Denominaciones oficiales de la formación; bloques "Trayectoria en Sexología Clínica" y "Docencia".
- Mención de consultorios (CABA / San Isidro).
- Fase 2: páginas por motivo de consulta (agregar `href` en `src/pages/sexologia-clinica.astro`).
