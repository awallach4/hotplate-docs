---
title: Beginner's Guide
date: 2022-07-01T00:05:24.865Z
---
# Beginner's Guide

## Getting Started

Are you someone who wants to build your own website without ever having seen a line of code in your life?  This is the page for you!  This guide will walk you through everything you need to know to get your site up and running.  If you're confused about anything while working through this guide, Google is your friend!  Many of the things that you will be working with when creating your site also have detailed documentation that you can refer to for help.

### What You'll Need To Use Hotplate

We'll cover how to set up your workspace in the next section, but here are the absolute most basic things that you'll need to create your site:

* A computer running Windows, Mac OS, or a Linux distribution (sorry, no mobile phones or tablets!).
* A Google Account (this cannot be a child or school account) for your backend services.

## Part 1: Setting Up Your Workspace

Unlike other site builders, Hotplate requires you to manually download, build, and deploy the code for your website.  This is to allow experienced developers to customize Hotplate to their liking before deploying their site.  For beginners like you, however, this can seem intimidating.  To be able to deploy your site, you're going to need some tools on your computer to build the code for your site and then deploy it.  Follow the steps below to install everything you will need to get started.

### Step 1: Getting an Editor

Before you go any further, know that you will have to edit a couple of lines of code to get your site ready (trust me, this will be easy).  To be able to do that, you will need an editor, preferably what's called an IDE (Integrated Development Environment).  While any editor, even Notepad (Windows) or TextEdit (Mac), will work, an IDE provides features like syntax highlighting, formatting, file management, version control, and linting that will make the code easier to read and manage.  My recommendation is [Microsoft Visual Studio Code](https://code.visualstudio.com), but there are others such as [Sublime Text](https://sublimetext.com) and [Brackets](https://brackets.io) that aren't bad either.  Don't worry about making the wrong choice, you can always try a different editor later.  For now, though, find an editor that you want to try and install it on your computer.

### Step 2: Installing Node.js

You may have heard of three languages that make up the internet: HTML (HyperText Markup Language), CSS (Cascading Style Sheets), and Javascript.  Hotplate builds what is called a SPA (Single Page Application), which is a program that uses Javascript to generate the HTML for your website.  To make this work, however, Hotplate requires several dependencies (other people's published code).  The way that we install these is with NPM (Node Package Manager).  NPM, in turn, needs to be able to run Javascript, which your computer cannot do without what is called a Javascript Runtime.  Fortunately, we can install both a runtime and NPM at the same time by installing Node.js.  While this sounds complicated, all you need to do is go to <https://nodejs.org> and download and install the LTS version onto your computer.

### Step 3: Installing the Firebase CLI

Hotplate uses a platform called Firebase, built by Google, to host everything for your site.  The way you get your site onto Firebase is with a tool called the Firebase CLI (Command Line Interface).  At this point, you'll be installing things using your computer's terminal rather than a web browser.  To install the Firebase CLI, open a terminal and type `npm i -g firebase-tools` and press enter.  Once this process finishes, your new development environment is ready to go!  Congratulations!

## Part 2: Setting Up Your Backend

At this point, you've set up your computer to be able to create your site.  Your website, however, is much more than what your users actually see.  It needs a way to keep track of who can log in, the content that you have on your site, and how to access your site.  This is extremely difficult, time-consuming, and potentially expensive if you try to do this yourself.  Instead, Hotplate uses a Google product called Firebase to take care of all of this for you.  In this section, you'll learn how to create a Firebase project and configure it for your site.

### Step 1: Creating a Firebase Project

Log into your Google Account and visit <https://console.firebase.google.com>.  Then, create a new project and name it accordingly.  When prompted to set up Google Analytics, create a new analytics account or use an existing one if you have one.  If it asks you about creating a hosting site, you can either do that now or later.  Then, wait a few minutes and you'll have just created the core of a website!

### Step 2: Adding Apps & Resources To Your Project

A backend without any resources is not very useful.  To start, add two web apps (one for Hotplate Client and one for Hotplate Console) to your Firebase Project.  Next, follow the list below to set up each service in your project:

* Authentication: This service manages your users.  For now, go to the sign-in providers tab and enable the email/password option (do not turn on email/link).
* Cloud Firestore: This service stores all of the content on your site in a No-SQL database (don't worry about what that means).  To set up your database, create a new one and choose a location near all of your users (I recommend the multi-region locations).  For the rules, you can choose either set, as deploying Hotplate will overwrite them anyway.
* Realtime Database: Don't set this up.
* Cloud Storage: This service stores all of the images, files, and whatever else you upload to your site.  The default storage bucket will automatically be created for you in the region that you chose for Firestore, so just set it up using either set of rules, as deploying Hotplate will also overwrite these rules.
* Hosting: This service makes your site accessible on the internet.  Create the default site, as well as a second site for the console.  Don't worry about the custom domain for now.  Then, go to the project settings and link each of your apps to the respective hosting sites.

### Step 3: Setting Up Cloud Functions

Hotplate uses Cloud Functions to enable multi-role authentication, delete user account data when a user deletes their account, and make weekly backups of your database.  Unfortunately, due to changes that Google made a few years ago, you must subscribe to the "Blaze" billing plan to be able to use Cloud Functions.  While this requires creating a billing account, you won't be charged anything unless you exceed the free tier.  For now, set up your billing account and then set the location for your functions to a region close to your users, if it needs to be set.  Then, go back to Cloud Storage and create another bucket in a region close to your users (choose `us-central-1`, `us-east-1`, or `us-west-1` and the standard storage class to avoid billing) for your weekly Firestore backups if you want them to occur.

### Step 4: Setting Up App Check

Firebase has a security feature called App Check that integrated with reCaptcha v3 to prevent abusive traffic, such as robots, from accessing your site.  Additionally, App Check prevents users from accessing your site by stealing the configuration for your site and hosting it elsewhere.  To set up App Check, first set up your site with reCaptcha v3 by creating a new site in the [reCaptcha admin panel](https://google.com/recaptcha/admin).  Once this is done, copy the secret key and use it to register your apps with reCaptcha v3 in the Firebase Console.  **Do not share this key with anyone!  Also, only add your production domains to the list of authorized domains in the reCaptcha admin panel.**

### Step 5: Setting Up Your Domain (Optional)

If you plan to use a custom domain for your site, go buy one from [Google Domains](https://domains.google) or another provider of your choice.  Once you have a domain, follow [these instructions](https://firebase.google.com/docs/hosting/custom-domain?hl=en&authuser=0) to connect it to Firebase Hosting and [these instructions](https://firebase.google.com/docs/auth/email-custom-domain?hl=en&authuser=0) to set up emails from Firebase Authentication (don't worry, these articles explain how to do this much better than I could).  Then, add your custom domain to the list of authorized domains in the reCaptcha admin panel for your site.

## Part 3: Configuring Hotplate

At this point, you've set up your editor and you've created your backend.  Now, it's time to configure Hotplate for your site.  Follow the steps below to get your site ready for deployment.

### Step 1: Setting Up Git (Optional)

Many developers use a version control system called Git to manage their projects.  You do not have to use Git, however, I would highly recommend it.  If you want to use Git, [download it](https://git-scm.com/) and install it on your computer.

### Step 2: Downloading Hotplate

#### Using Git

To download Hotplate using Git, open a terminal and navigate to the folder where you want your project's folder to be located by using the `cd [folder name]` command.  Then, run `git clone https://github.com/awallach4/hotplate-sites.git [desired folder name]` to download Hotplate.

#### Without Git

If you don't want to use Git to download Hotplate, visit <https://github.com/awallach4/hotplate-sites> and download a .zip file of the code.

### Step 3: Installing Dependencies

Now that you have downloaded Hotplate, you'll need to install its dependencies for it to work.  Open a terminal and use the `cd [folder name]` command to navigate to your project folder.  Once there, run `npm install` to install all of the dependencies.  If you get a message saying that there are vulnerabilities, run `npm audit fix` to fix them.  If this doesn't work, there isn't really anything you can do.

### Step 4: Configuring Your Site

Open your project's folder in your IDE if you decided to install one.  Otherwise, you can follow along in your file explorer and basic text editor.  Then, find the following files and make the necessary edits.

#### `client/index.html`

Find the following lines of code and replace the *italicized* text with what is applicable for your site.

`<title>`*Hotplate Client*`</title>`

`<meta
  name="description"
  content="`*This is a demo of the Hotplate Site Builder.*`"
/>`

`<strong`\
  `>We're sorry but` *Hotplate* `doesn't work properly`\
  `without JavaScript enabled. Please enable it to continue.</strong`\
`>`

#### `client/vite.config.ts` and `console/vite.config.ts`

Find the section of code below and replace `name: "Hotplate Client"` with `name: "[Your Site Name]"`, replacing the placeholder as appropriate.

```typescript
manifest: {
  name: "Hotplate Client",
  theme_color: "#121212",
  icons: [
    {
      src: "android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png"
    },
    {
      src: "android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png"
    },
    {
      src: "android-chrome-maskable-192x192.png",
      sizes: "192x192",
      type: "image/png",
      purpose: "maskable"
    },
    {
      src: "android-chrome-maskable-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "maskable"
    }
  ]
}
```

#### `client/public/` Folder and `console/public/` Folder

Replace all of the files in this folder, except for `robots.txt` and `profile.png` with the icons for your site.  Use the original file names for the new icons.  You should also make sure that the new icons have the same dimensions as the original ones.  If you need help with the "maskable" icons, visit <https://maskable.app> to generate some.

#### `client/src/CLIENT_CONFIG.ts` and `console/src/CONSOLE_CONFIG.ts`

Replace all of the placeholders with the applicable values.  If you do not plan to use the calendar service, remove the placeholders, but only delete what is in between the quotation marks, otherwise follow the guide on the email and calendar services to learn what to paste here.  For the `firebaseConfig` variable, go to the project settings page on the Firebase Console and copy the object for the client app.  For the `recaptchaSiteKey` variable, go to the reCaptcha console and copy the site key for your site.

#### `console/index.html`

Replace the content in between the `<title>` tags and the `<noscript>` tags in the same manner that you did for the client app.

#### `functions/src/scheduledFirestoreExport.ts`

If you want to backup your Firestore database, replace the placeholder for the `bucket` variable with the ID of the Cloud Storage bucket that you created for the backups.  If you do not want to backup your database, delete this file and then remove the following lines from `functions/src/index.ts`.

* `import scheduledFirestoreExport from "./scheduledFirestoreExport";`
* `scheduledFirestoreExport,`

Congratulations!  You just configured your site for deployment!

## Part 4: Deploying Your Site

Your backend is now set up and you've configured Hotplate for your site.  Now, it's time to put your site on the internet!  Before going live, there are a few more things to do.

### Step 1: Building Your Site's Code

If you were to look through all of the files in your project, you probably would not understand it without coding experience, but it would at least look like the bits of HTML and Javascript that you have seen.  While these files contain code that is functional, each file contains only a snippet of your site.  Some of them are also quite long, which would slow down your site considerably.  In order to fix these problems, you need to generate a production build of your site.  What this does is remove all of the indentation and spacing from each file and directly inserts the needed code where each one of the `import` statements is.  It also splits the code into multiple files that your site can load only as needed, which significantly speeds up your site.  To build your site, navigate to the client folder using the `cd [folder name]` command and run `npm run build`.  Do the same thing for the console folder and the functions folder.

### Step 2: Connecting The Firebase CLI To Your Firebase Project

Remember that Firebase CLI that you installed earlier?  It's time to use it to connect your project to your backend.  To do this, first run `firebase login` from the root folder of your project and proceed to log into your Google Account.  Once logged in, run `firebase use [project name]` with the name of your Firebase project to link your Hotplate project to your Firebase project.  Then, run `firebase target:add hosting client [default site name]` and `firebase target:add hosting console [console site name]`, using the names of the respective hosting sites, to allow you to control which hosting site you deploy to.

### Step 3: Going Live

Now for the big moment: deploying your site to the internet!  Once you feel ready, just run `firebase deploy` to publish your site to the internet.  This will take a few minutes, but once it's done, your site will be live on the internet.  Congratulations!  You are now the proud owner of a site powered by Hotplate!

#### Avoiding Billing

If you want to avoid billing, make sure that you install the latest version of the Firebase CLI by running `npm i -g firebase-tools` and deploying your functions one at a time.  Run the commands below:

`firebase deploy --except functions`

`firebase deploy --only functions:[function name]` for each function

Now that your site is live, follow the Site Setup guide to create the first admin account and get started with Hotplate Console.