# Onafã

An original Vue + Quasar one-page restaurant site for Onafã. It takes broad editorial cues from the supplied reference (large imagery, intentional whitespace, story, gallery, and reservation flow) while using original structure, styling, copy, and the supplied Onafã photography.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Content locations

- `src/data/site.js` contains the shared imagery, address, Maps link, and WhatsApp reservation details.
- `src/data/copy.js` contains the complete Portuguese and English copy, including the translated WhatsApp reservation message.
- `src/components/` holds independently scoped page sections and the reservation dialog.
- `src/styles/app.scss` contains the visual system and responsive rules.

The supplied `assets/onafa_logo.svg` is used for the header, hero, drawer, and footer. The image gallery uses `masonry-layout` plus `imagesloaded` to reflow photos as they load.

The reservation dialog prepares a WhatsApp message and only opens WhatsApp after the visitor chooses “Continuar no WhatsApp.”

Visitors can switch between Portuguese and English. Their chosen language is remembered in browser storage.
