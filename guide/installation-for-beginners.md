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

Hotplate uses Cloud Functions to enable multi-role authentication, delete user account data when a user deletes their account, and make weekly backups of your database.  Unfortunately, due to changes that Google made a few years ago, you must subscribe to the "Blaze" billing plan to be able to use Cloud Functions.  While this requires creating a billing account, you'll only be charged a few cents per month.  As soon as any change to this is made in the future, I will work diligently to update Hotplate to implement that change.  For now, set up your billing account and then set the location for your functions to a region close to your users.  Then, go back to Cloud Storage and create another bucket in a region close to your users for your weekly Firestore backups if you want them to occur.

### Step 4: Setting Up Your Domain (Optional)

If you plan to use a custom domain for your site, go buy one from [Google Domains](https://domains.google) or another provider of your choice.  Once you have a domain, follow [these instructions](https://firebase.google.com/docs/hosting/custom-domain?hl=en&authuser=0) to connect it to Firebase Hosting and [these instructions](https://firebase.google.com/docs/auth/email-custom-domain?hl=en&authuser=0) to set up emails from Firebase Authentication (don't worry, these articles explain how to do this much better than I could).