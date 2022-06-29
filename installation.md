---
title: Installation
date: 2022-06-29T21:41:10.197Z
---
# Installation

## Prerequisites

Downloading Hotplate is easy, but it won't work if you don't set some things up first.  These prerequisites include the build tools required to create your site and the Firebase backend resources required to host your site.

### Setting Up Your Build Tools

First thing's first, head over to <https://nodejs.org> and download either the LTS version or the current version (your choice, it shouldn't matter).  Once you've installed Node and NPM from this download, you will need some sort of text editor to configure your site's Firebase credentials and to replace the placeholder values used in some components (these are all in SNAKE_CASE).  I recommend installing [Visual Studio Code](https://code.visualstudio.com/), but you can use any editor that you feel comfortable with.  For VSCode users, I would highly recommend installing the Volar, ESLint, and Prettier extensions if you plan to make any modifications to Hotplate or add your own custom components.  Next, you'll want to open a terminal window and run `npm i -g firebase-tools` to install the Firebase CLI.  Once you've installed Node, an editor, and the Firebase CLI, you're ready to move on.

### Setting Up Your Backend

Hotplate uses Firebase for authentication, Firestore database, storage, Cloud Functions, analytics, and performance monitoring.  It also uses reCaptcha v3 along with Firebase App Check to ensure that only legitimate requests coming from the domain you specify can access your backend.

#### Firebase

Head to the [Firebase Console](https://console.firebase.google.com) and create yourself a project.  **You'll need to set up a billing account on the "Blaze" plan to be able to deploy Hotplate, as it uses Cloud Functions to support multi-role authentication**.  When creating your project, choose a location close to your clients, and be sure to enable Google Analytics and the default Firebase Hosting site.  Once your project is created, create two web apps: one for Hotplate Client and one for Hotplate Console.  Next, go to your Firestore database (NOT Realtime Database) and create a database in a location close to your clients.  Do the same thing for Firebase Storage.  It does not matter which ruleset you choose for Firestore or storage, as deploying Hotplate will set up the required rules for your site.  Then, go to authentication and enable email and password sign-in (NOT email link).  If you need help setting up any of your Firebase resources, check out their [docs](https://firebase.google.com/docs).

#### App Check and reCaptcha

Head to the [reCaptcha Admin Console](https://google.com/recaptcha/admin) and create yourself a site for reCaptcha v3.  **Only authorize the domain that you plan to use for production, whether that be a custom domain or <firebase-project-id>.web.app or <firebase-project-id>.firebaseapp.com**.  Then, copy the reCaptcha secret key and head to the App Check configuration on the Firebase Console.  Register each of your two apps on this page with the reCaptcha v3 secret key that you just copied.  **Do not use the site key for this step, as this key goes in Hotplate's code in the next steps**.

## Setting Up Hotplate

### Downloading Hotplate

If you're a Git user (which you should be), open a terminal and run `git clone https://github.com/awallach4/hotplate-sites.git` to clone the repository to your computer.  If you don't use Git, go to the [Hotplate Sites Github repository](https://github.com/awallach4/hotplate-sites) and download the .zip folder and extract it.  Then, open this folder in your editor.

### Configuring Hotplate for your Site

#### If you plan to use the Email and Calendar Services

Coming soon!

#### If you plan NOT to use the Email and Calendar Services

Here is a list of the things that you will need to change in Hotplate's code before you deploy your site:

* `client/index.html` - Change the `<title>`, `<meta name="description">`, and `<noscript>` content to whatever you want for your site.
* `client/vite.config.ts` - Change the name in the manifest object to your site's name (this is for future PWA support).
* `client/public/` directory - Replace all of the files in this folder, except for `robots.txt` and `profile.png`, with the icons for your site.  **The new files must have the same names**.  You can learn about the maskable icons at <https://web.dev/maskable-icon/>, but you should reference the existing icons for the required sizes.
* `client/CLIENT_CONFIG.ts` - Replace all of the placeholders with the applicable values.  Since you are not planning to use the email or calendar services, you can leave the calendar service values unchanged.
* `console/index.html` - Change the `<title>` and `<noscript>` content to whatever you want for your site's admin console.
* `console/vite.config.ts` - Change the name in the manifest object to your site's name (this is for future PWA support).
* `console/public/` directory - Replace all of the files in this folder, except for `robots.txt` and `profile.png`, with the icons for your site.  **The new files must have the same names**.  You can learn about the maskable icons at <https://web.dev/maskable-icon/>, but you should reference the existing icons for the required sizes.
* `console/CONSOLE_CONFIG.ts` - Replace all of the placeholders with the applicable values.  Since you are not planning to use the email or calendar services, you can leave the calendar service values unchanged.
* `functions/src/scheduledFirestoreExport.ts` - Replace the `bucket` variable placeholder with the storage bucket where you want to store your database backups.

Once all of these placeholders have been changed, your site is ready.

### Deploying Your Site

First, log into the Firebase CLI by running `firebase login`.  Once logged in, navigate to the root directory of your Hotplate Site and run `firebase init`.  Choose which features you'd like to initialize, however, everything should already be configured in the provided `firebase.json` file.  Make sure to initialize hosting as a Single Page Application (SPA).  While this will initialize most features, you will need to set up hosting targets once you create a second hosting site, but for now, let's build your site for production.  Navigate to the `client` directory and run `npm install` and `npm run build` to build your client site.  Do this for the `console` and `functions` directories as well.  Once the processes finish, your site is ready for production!

#### Setting up Firebase Hosting

Return to the Firebase Console and create a second hosting site.  Then, go to the project settings and link both of your apps to the respective hosting sites.  If you are using a custom domain, make sure it is registered with reCaptcha and follow the linked instructions to set it up with both [Firebase Hosting](https://firebase.google.com/docs/hosting/custom-domain?hl=en&authuser=0) and [Firebase Authentication](https://firebase.google.com/docs/auth/email-custom-domain?hl=en&authuser=0).  Then, follow [these steps](https://firebase.google.com/docs/hosting/multisites?hl=en&authuser=0#set_up_deploy_targets) to set up hosting targets for the Firebase CLI.

#### Going Live

At this point, everything should be set up!  Just run `firebase deploy`, wait a few minutes, and your site should be live!  Congratulations on completing the hard part!