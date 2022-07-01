---
title: Site Setup
date: 2022-07-01T22:41:30.619Z
---
# Site Setup

Congratulations on deploying your site to the internet!  While anyone can now view your site, it has no content, no user accounts, no theme configuration, and is practically worthless.  Follow along with this guide to create the first user account and set your site up for people to see.

## Step 1: Creating The First Account

Hotplate's authentication system is invite-only, meaning that there is no way to create an account through your site.  Even if you tried to use a script to create an account in Firebase Authentication manually, the account would not have the required `authorized: true` custom claim on its token, which would render it useless.  The way we address this for the first account is with the `addFirstAdmin` Cloud Function that you deployed.  This will authorize an account and make it an admin account so that you can manage everything through Hotplate Console in the future.  Follow the steps below to create this account:

1. In the Firebase Console, create a new user with an email and password of your choice.
2. In Cloud Firestore, start a new collection called `admin` and create the first document with the user's UID (found on the authentication dashboard) as the document id.  Since all new documents require at least one field, you can just put in a name string field with the user's username.  It really doesn't matter.
3. Copy the URL of the `addFirstAdmin` function from the Cloud Functions dashboard and paste it into your browser.  Before pressing enter, add `?id=[user id]` to the end of the URL, replacing the placeholder with the user's UID.  Then, hit enter and you should see a success message.  If not, try again, making sure that the UID is correct and that it is the id of the document in the Firestore `admin` collection.  Additionally, this must be the only document in that collection.

After you get the success message, the first user account is ready for use!

## Step 2: Signing In For The First Time

Now that the first user account is ready, navigate to your site and log in with the credentials that you set for the user.  You should be redirected to the profile page.  Once there, click the button to verify your email address, check your email, verify your address with the link that was sent to you, and then log back in.  If this worked correctly, the alert message should be gone and you should be able to edit your profile and change your password if you wish.

## Step 3: Setting Up Your Site

Visit your site's console and log in using the account you created and verified.  You should be redirected to a page with this documentation embedded!  Once logged in, navigate to the Site Theme page and create both the light and dark themes for your website or use the defaults.  Remember to save when you're done by clicking the checkmark button on the bar at the top of the screen.  Then, go to the Site Settings page and enter the URL for the console and a Google Meet, Zoom, Webex, or other virtual meeting link if you need a button on your site for your users to click to enter a meeting.  Ignore the email and calendar service settings for now; you can set those up later if needed.  Remember to save on this page as well!

## Step 4: Creating Your First Page

Click the Add Page button in the sidebar to create your homepage (you should probably name it "Home").  This page should be set to be visible to anyone on the internet.  Once created, add as many components as you'd like to your homepage, and remember to save when you're done.  Then, open the Page Settings dropdown in the sidebar and set your homepage as the default page.  You can also set the footer text for your site and add a copyright symbol if you need one.  Once you've set the default page and footer text, click the button to save the changes.  Congratulations!  Your site is now ready for use!