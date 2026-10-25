"use client";

import { getApp, getApps, initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getFirestore } from "firebase/firestore";

let appCheckInstance;

export function getFirebaseServices() {
  const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  };

  const missingConfig = Object.entries(config)
    .filter(([, value]) => !value)
    .map(([key]) => key);
  if (missingConfig.length) {
    throw new Error(`Firebase setup is incomplete: ${missingConfig.join(", ")}`);
  }

  const app = getApps().length ? getApp() : initializeApp(config);
  const siteKey = process.env.NEXT_PUBLIC_FIREBASE_APPCHECK_SITE_KEY;
  // App Check is optional until its site key is configured. Firestore rules
  // still validate every write, so local development and deployments without
  // an App Check provider can submit while the provider is being configured.
  if (siteKey && !appCheckInstance) {
    appCheckInstance = initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(siteKey),
      isTokenAutoRefreshEnabled: true,
    });
  }

  return { db: getFirestore(app) };
}
