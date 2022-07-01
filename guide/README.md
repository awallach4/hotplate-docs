---
title: Introduction
date: 2022-06-30T01:08:52.134Z
---
# Introduction

## Live Demo

Head on over to <https://hotplate-demo.web.app> and use the login information below to sign in as either a webmaster or basic user so you can see what Hotplate is capable of (sorry, no admin logins; never trust a client!). If you want to see Hotplate's user management dashboard in action, you'll have to create your own site.

* Webmaster:

  * Email: test-webmaster@hotplate.com (this is a fake email address, please don't use it anywhere else or send anything to it.)
  * Password: Ic@nManag3C0ntent!
* Basic User:

  * Email: test-user@hotplate.com (this is a fake email address, please don't use it anywhere else or send anything to it.)
  * Password: S0_B@sic!

*Note: The built-in email and calendar services will not work in this demo.*

## About Hotplate

Hotplate began as an open-source project to build a schemaless content management system that stored data in the Firebase [Cloud Firestore](https://firebase.google.com/products/firestore?authuser=0&hl=en) database. The owner of that project then let me reverse-engineer it to understand how it worked. During this process, I noticed a file called `index.js` that defined the structure of the database. From that point, I rebuilt Hotplate to retrieve this structure from an additional collection in the Firestore database, allowing the user to define their own page structure without knowing how to program a website. After 7 months of work, I released the first version of Hotplate as a replacement website for my Boy Scout Troop's Shutterfly Share Site. This version met their needs but contained a lot of bugs, confusing code, and a poor database structure. Three months later, I released the second version that converted my code to Typescript and the Vue Class Component API and redefined the database structure. Although a few additions were made about 5 months later, this version of Hotplate has been live for over a year, running smoothly for my troop. Now, Hotplate is finally public and rewritten in the Vue Composition API with yet another database structure that will allow for future implementation of subpages. What was once a simple CMS is now a full-scale site builder that implements multi-role authentication, dynamic theme management, and complex components such as signup sheets, a message board featuring posts and comments, and an integrated email and calendar service using [Google Apps Script](https://script.google.com).

## Why Hotplate?

Many free site builders already exist on the internet, such as Google Sites, WordPress, Wix, Weebly, and Shutterfly Share Sites, to name a few.  Many of these site builder services display intrusive ads on your site, make you pay if you want to use "premium" features, don't securely serve your content, lack critical accessibility features, limit the number of users you can have, and don't offer solutions such as multi-role authentication and an integrated signup sheet application.  What's more?  These plug-and-play site builders give you very little to play with in terms of how your site looks, what components are available, and what you can do with the backend.  Hotplate addresses these issues by giving you complete control over your site.  Let's be clear; **you control the Firebase backend that your site runs on**.  This means that you control the authentication system, database, file storage, and hosting AND you get free analytics and performance monitoring.  Hotplate is also open source, so you are free to completely reverse engineer it and add your own components, change existing components and features, or remove anything you want from it to build exactly the site you need.  *The tradeoff?  You'll need to be able to run basic terminal commands, edit specific strings in HTML and Typescript files, and spin up your Firebase project.*  For those who are already experienced with coding, feel free to check out the installation guide to quickly set up your project.  If you've never coded before, you should check out the beginner's guide to learn how to set up everything you will need.

Oh, and did I mention, there's no "catch" to Hotplate being free. I'm not asking for sponsors, donations, subscriptions, premium version fees, ad-free fees, or anything like that. Aside from what you pay Firebase for the backend if you exceed the generous free tier and your hosting domain (if you choose to buy a different one), your site is free! Just make sure to follow the terms of the attached license file.

## Dependencies

Hotplate would not be possible without the following libraries:

* [Vue - Modern Javascript framework](https://v2.vuejs.org/)
* [Vue 2 Composition API Plugin](https://github.com/vuejs/composition-api)
* [Vue Router - Allows for page navigation](https://v3.router.vuejs.org/)
* [Pinia - State management, used for keeping you signed in and managing the navbar](https://pinia.vuejs.org/)
* [Firebase - Backend authentication, database, storage, and hosting from Google](https://firebase.google.com/)
* [FullCalendar - Creates a beautiful calendar widget component](https://fullcalendar.io/)
* [Tiptap - Creates a customizable rich text editor](https://tiptap.dev/)
* [Vuetify - Provides Material Design components to build your entire site!](https://vuetifyjs.com/)
* [DOMPurify - Sanitizes HTML and links to keep you safe from XSS attacks](https://github.com/cure53/DOMPurify)
* [Vuedraggable - Makes drag-and-drop possible in Hotplate Console](https://github.com/SortableJS/Vue.Draggable)