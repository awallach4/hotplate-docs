---
title: Site Setup
date: 2022-07-01T22:41:30.619Z
---
# Site Setup

Congratulations on deploying your site to the internet!  While anyone can now view your site, it has no content, no user accounts, no theme configuration, and is practically worthless.  Follow along with this guide to create the first user account and set your site up for people to see.

## Step 1: Creating The First Account

Follow the steps below to create the first account:

1. In Cloud Firestore, start a new collection called `new-users` and create the first document with the user's email in a field called `email` and add a second field called `newAdmin` with a boolean value of `true`.
2. Go to the "Register" page on your new site and create an account with the email address you just added to the `new-users` collection.  The blocking function should automatically promote this account to an admin account.

After you get the success message, the first user account is ready for use!

## Step 2: Signing In For The First Time

Once on your profile page, click the button to verify your email address, check your email, verify your address with the link that was sent to you, and then log back in.  If this worked correctly, the alert message should be gone.

## Step 3: Setting Up Your Site

Visit your site's console and log in using the account you created and verified.  You should be redirected to a page with this documentation embedded!  Once logged in, navigate to the Site Theme page and create both the light and dark themes for your website or use the defaults.  Remember to save when you're done by clicking the checkmark button on the bar at the top of the screen.

## Step 4: Creating Your First Page

Click the Add Page button in the sidebar to create your homepage (you should probably name it "Home").  This page should be set to be visible to anyone on the internet.  Once created, add as many components as you'd like to your homepage, and remember to save when you're done.  Then, open the Site Settings dropdown in the sidebar and set your homepage as the default page.  You can also set the footer text for your site and input the URL for your admin console for easy access from your site.  Once you've set the default page and footer text, click the button to save the changes.  Congratulations!  Your site is now ready for use!