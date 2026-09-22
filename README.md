# Heikoop Bouw

Complete Nederlandstalige website in Astro. Statische uitvoer; geen database of server vereist.

## Lokaal

`npm install`, `npm run dev`. Productie: `npm run build`. De complete website staat daarna in `dist/`.

## Inhoud

- Homepage, dienstenoverzicht en vier dienstenpagina’s.
- Projectenoverzicht met filters en zes projectdetailpagina’s.
- Over Heikoop, contact, privacy-informatie en 404.
- Origineel logo, oorspronkelijke rode accentkleur en eigen projectbeelden.
- Zelf gehoste lettertypen, metadata, sitemap en gestructureerde bedrijfsgegevens.
- Vergrootbare projectfoto’s met toetsenbordbediening en focusherstel.
- Algemene klantvragen, een mobiele contactbalk en een kort aanvraagformulier met projectsoort, optionele gewenste periode en projectreferentie.

Gedeelde vormgeving: `src/styles/global.css`; vaste inhoud: `src/data/content.ts`; gedeelde navigatie: `src/layouts/Layout.astro`.

## Contact

Het formulier valideert en bereidt een bericht voor. De bezoeker kiest daarna WhatsApp of het eigen e-mailprogramma en verstuurt het bericht zelf. Er is geen ontvangstbevestiging of servermail. Er worden geen formuliergegevens opgeslagen. Foto’s kunnen worden toegevoegd in de gekozen berichtentoepassing.

Naam, plaats en omschrijving zijn verplicht. E-mail, telefoonnummer en gewenste periode zijn optioneel. Zonder JavaScript blijft de formulierknop uitgeschakeld; de directe contactlinks blijven bruikbaar.

## Bronnen en publicatie

Logo, projectbeelden, contactgegevens en biografie: https://www.heikoopbouw.nl/ (geraadpleegd 19 september 2026). De rode huisstijlkleur #d2121f komt uit de oorspronkelijke CSS. De aangeleverde analyse is als redactioneel verbeteradvies verwerkt; onbevestigde reviews, projectdatums, plaatsnamen, keurmerken en resultaatclaims zijn niet toegevoegd.

Vóór vervanging van het oorspronkelijke domein: laat de eigenaar de teksten en contactgegevens controleren, bevestig het werkgebied en maak een volledige privacyverklaring passend bij de feitelijke bedrijfsprocessen en hosting. De huidige privacypagina beschrijft uitsluitend de daadwerkelijke technische werking van deze website. Pas `site` in `astro.config.mjs` en `public/robots.txt` aan voor een ander domein.
