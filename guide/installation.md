---
title: Installation
date: 2022-06-29T21:41:10.197Z
---
# Installation

This page is for those who already have some experience with Vue and Firebase and are just looking for how to configure Hotplate.  Everyone else should check out the beginner's guide for a detailed installation process.

## Setting Up Your Backend

Head to the [Firebase Console](https://console.firebase.google.com) and create yourself a project.  **You'll need to set up a billing account on the "Blaze" plan to be able to deploy Hotplate, as it uses Cloud Functions to support multi-role authentication**.  Next, create two web apps, one for Hotplate Client and one for Hotplate Console.  Then, set up email/password authentication, Cloud Firestore, Cloud Storage, Hosting, Cloud Functions, and App Check with reCaptcha v3.  If you want to use the `scheduledFirestoreExport` function to backup your Firestore database, create a second storage bucket for the backups.  You should also create a second hosting site for Hotplate Console and link your apps to their respective sites.

## Setting Up Hotplate

### Downloading Hotplate

If you're a Git user (which you should be), open a terminal and run `git clone https://github.com/awallach4/hotplate-sites.git` to clone the repository to your computer.  If you don't use Git, go to the [Hotplate Sites Github repository](https://github.com/awallach4/hotplate-sites) and download the .zip folder and extract it.  Then, open this folder in your editor.

### Configuring Hotplate for your Site

Here is a list of the things that you will need to change in Hotplate's code before you deploy your site:

* `client/index.html` - Change the `<title>`, `<meta name="description">`, and `<noscript>` content to whatever you want for your site.
* `client/vite.config.ts` - Change the name in the manifest object to your site's name (this is for future PWA support).
* `client/public/` directory - Replace all of the files in this folder, except for `robots.txt` and `profile.png`, with the icons for your site.  **The new files must have the same names**.  You can learn about the maskable icons at <https://web.dev/maskable-icon/>, but you should reference the existing icons for the required sizes.
* `client/CLIENT_CONFIG.ts` - Replace all of the placeholders with the applicable values.  If you are not planning to use the email or calendar services, you can leave the calendar service values unchanged, otherwise, follow the guide on setting up the email and calendar services.
* `console/index.html` - Change the `<title>` and `<noscript>` content to whatever you want for your site's admin console.
* `console/vite.config.ts` - Change the name in the manifest object to your site's name (this is for future PWA support).
* `console/public/` directory - Replace all of the files in this folder, except for `robots.txt` and `profile.png`, with the icons for your site.  **The new files must have the same names**.  You can learn about the maskable icons at <https://web.dev/maskable-icon/>, but you should reference the existing icons for the required sizes.
* `console/CONSOLE_CONFIG.ts` - Replace all of the placeholders with the applicable values.  If you are not planning to use the email or calendar services, you can leave the calendar service values unchanged, otherwise, follow the guide on setting up the email and calendar services.
* `functions/src/scheduledFirestoreExport.ts` - If you want to backup your Firestore database, replace the `bucket` variable placeholder with the storage bucket where you want to store your database backups.  Otherwise, delete this file and delete the imports of this file from `functions/src/index.ts`.

Once all of these placeholders have been changed, your site is ready.

## Deploying Your Site

Navigate to the `client` directory and run `npm install` and `npm run build` to build your client site.  Do this for the `console` and `functions` directories as well.  Once the processes finish, your site is ready for production!  Then, run `firebase use [project name]` to link to your Firebase project.  Once linked, create two hosting deploy targets, one for the client site and one for the console site.

#### Going Live

At this point, everything should be set up!  Just run `firebase deploy`, wait a few minutes, and your site should be live!

#### Avoiding Billing

To avoid billing for Firebase Functions deployments, make sure you have the latest version of the Firebase CLI.  Then, deploy everything except for functions and extensions and then deploy each function individually.  Make sure to deploy the `clearData` function located in `functions/src/interrimDeleteUserData.ts` to replace the Delete User Data extension, as installing the extension will use Container Registry (not free) instead of Artifact Registry until Google updated the extension.

Now that your site is live, follow the Site Setup guide to create the first admin account and get started with Hotplate Console.