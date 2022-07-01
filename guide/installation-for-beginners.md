---
title: Installation - For Beginners
date: 2022-07-01T00:05:24.865Z
---
# Installation - For Beginners

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

Log into your Google Account and visit <https://console.firebase.google.com>.  Then, create a new project and name it accordingly.  When prompted to set up Google Analytics, create a new analytics account or use an existing one if you have one.  Then, wait a few minutes and you'll have just created the core of a website!

### Step 2: Adding Apps & Resources To Your Project

A backend without any resources is not very useful.