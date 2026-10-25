# Vipul Portfolio (Next.js)

The portfolio is built with the Next.js App Router. Each main page section lives in its own component under `app/components/sections`, and `app/colors.js` is the single source for the light and dark palettes.

## Run locally

```sh
npm install
npm run dev
```

The project is configured for static export. `npm run build` writes the deployable site to `out/`, suitable for static hosting such as GitHub Pages.

## Firebase contact form

The contact form writes messages to the Firestore `contactMessages` collection using the Firebase Web SDK. Firebase configuration is public web-app configuration; it is read from `NEXT_PUBLIC_FIREBASE_*` variables at build time. App Check with reCAPTCHA v3 is supported as an additional abuse-prevention layer; the app can submit without it until a site key is configured. No Admin SDK key is placed in the browser.

1. Create or select a Firebase project, register a Web app, and create a Cloud Firestore database.
2. Copy `.env.example` to `.env.local` and set the Firebase web-app config values. In CI, set the same values as build-time environment secrets.
3. Publish `firestore.rules` to the project's Firestore database with `firebase deploy --only firestore:rules --project YOUR_PROJECT_ID`. These rules allow validated document creation only; clients cannot read, edit, or delete submissions. The only fields stored are the sender's name, email, message, server timestamp, and form source.
4. For production abuse prevention, register the web app in Firebase Console → App Check with reCAPTCHA v3, set `NEXT_PUBLIC_FIREBASE_APPCHECK_SITE_KEY` in `.env.local` and CI, and enable App Check enforcement for Cloud Firestore. Tokens are sent automatically by the initialized Firestore SDK.

Install the added SDK dependency with `npm install` before building. The current local workspace has Firebase configuration in the ignored `.env.local`; deployments need the equivalent build-time environment variables and Firestore rules.
