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
4. Del sitio anterior, **borrar**: los `.html` viejos (`Mitos.html`, `Kamasutra.html`, etc.;
   `index.html` se reemplaza por el nuevo), la carpeta `assets/`, `project.mobirise` y el
   `sitemap.xml` viejo. Las direcciones viejas siguen funcionando por las redirecciones.
5. **No borrar**: `googleb7aaaf8d166bdc10.html` (verificación de Search Console; también viene
   en `dist/`), `ftpquota`, `cgi-bin/`, ni carpetas del sistema o del correo.
6. Verificar que el certificado SSL esté activo (cPanel → SSL/TLS Status / AutoSSL).
7. En Search Console: enviar `https://sexualidad-activa.com/sitemap-index.xml` y quitar el
   sitemap viejo (`/sitemap.xml`) si figura.

## Redirecciones del sitio anterior

Todas permanentes (301), sin distinguir mayúsculas, definidas en `public/.htaccess`
y probadas en Apache.

| Página vieja | Destino |
|---|---|
| `index.html` | `/` |
| `EyaculacionRetardada.html` | `/sexologia-clinica/eyaculacion-retardada/` |
| `Anorgasmia.html` | `/sexologia-clinica/dificultades-con-el-orgasmo/` |
| `Dispareunia.html`, `Vaginismo.html` | `/sexologia-clinica/dolor-en-la-penetracion/` |
| `CrisisdePareja.html` | `/terapia-de-pareja/` |
| `TerapiaOnLine.html` | `/contacto/` |
| `PreguntasFrecuentes.html` | `/sexologia-clinica/` |
| `EyaculacionPrecoz.html` | `/sexologia-clinica/eyaculacion-rapida/` |
| `ProblemasEreccion.html` | `/sexologia-clinica/dificultades-de-ereccion/` |
| `FaltaDeseo.html` | `/sexologia-clinica/deseo-sexual/` |
| `Mitos`, `Kamasutra`, `Afrodisiacos`, `Alcohol`, `Stress`, `Embarazo`, `TereceraEdad`, `Adolescente`, `EducacionSexual`, `Fobias` (`.html`) | `/sexologia-clinica/` |
| `Hijos.html`, `Identidad.html` | `/psicoterapia-individual/` |
| `TalleresyCharlas.html` | `/` |

## SEO

Todo en la cabecera de cada página (no cambia el texto visible):

- **Título y descripción**: en cada página (`title` / `description` de `<Base>`); en los motivos
  de consulta, en `src/data/motivos.ts`. Incluyen los términos clínicos que la gente busca
  (eyaculación precoz, disfunción eréctil, dispareunia, vaginismo, anorgasmia) y "online".
- **Datos estructurados** (`src/layouts/Base.astro`): la profesional, el servicio (presencial y
  online, en español, para Argentina, España, Estados Unidos y Latinoamérica) y, en cada motivo,
  la condición con sus otros nombres (`condiciones` en `motivos.ts`).
- **Palabras clave** (`keywords`): Google no las usa; se mantienen como referencia.

## Medición (Google Analytics 4)

- Propiedad existente "Sexualidad-activa - GA4", ID `G-GR6W7H8X7Q` (en `src/data/site.ts`).
- Modo de consentimiento: sin cookies de medición hasta que la persona acepta el aviso
  (`src/components/ConsentBanner.astro`). Publicidad siempre desactivada.
- Solo mide en `sexualidad-activa.com` (no en el subdominio de prueba ni en local).
- Cada toque en WhatsApp envía el evento `whatsapp_click` con `ubicacion`
  (`flotante` o `contacto`) y `pagina`.
- En Analytics: marcar `whatsapp_click` como **evento clave** (Administrar → Eventos) y
  vincular la propiedad con Search Console y con Google Ads.

## Pendientes

- Revisión de la política de privacidad (`src/pages/privacidad.astro`) por Silvina o asesoría legal.
- Motivos de consulta: los textos viven en `src/data/motivos.ts`; al agregar uno con `slug`
  y `pagina` se genera `/sexologia-clinica/<slug>/` automáticamente.
