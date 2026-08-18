# Barufaldi Abogados

Nueva web institucional de Barufaldi Abogados, concebida como una experiencia editorial contemporánea para una firma jurídica corporativa.

## Stack

- Next.js (App Router)
- React y TypeScript
- CSS responsive con una arquitectura de variables y componentes
- Lucide React para iconografía puntual

## Instalación y desarrollo

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Build y deploy

```bash
npm run build
npm start
```

El repositorio puede importarse directamente en Vercel; no requiere variables de entorno.

## Estructura

- `src/app`: página, layout, estilos globales y rutas SEO.
- `src/components/layout`: header y footer.
- `src/components/sections`: secciones editoriales del sitio.
- `src/components/ui`: primitives reutilizables.
- `src/data`: áreas de práctica, clientes y contacto.

## Actualización de contenido

Las áreas se editan en `src/data/practiceAreas.ts`, los clientes en `src/data/clients.ts` y los datos verificables de contacto en `src/data/contact.ts`. Los datos de contacto vacíos no se muestran públicamente.
