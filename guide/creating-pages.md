---
title: Creating Pages
date: 2022-07-02T03:11:55.097Z
---
# Creating Pages

You can create as many pages as you need for your site through Hotplate Console.  To create a page, just click the "Add Page" button in the sidebar and give the page a name and permission setting.  Hotplate will automatically transform the page name into a URL-safe path that also serves as its document path in Firestore, so once the page is created, its name cannot be changed.  The permission setting can be changed through the "Page Settings" dropdown at the top of the page.

## Components

Pages in Hotplate are made up of components.  To add a component, click the plus button in the bottom right corner of the screen and choose the component type.  The new component will be added at the bottom of the page.  Most components are pretty self-explanatory to use, however, components like the Signup Sheet Collection, Message Stream, and Google Calendar Widget are a bit harder to use.  As always, remember to save the page after you are done editing.

### Component Types

Here is a list of all of the components that Hotplate offers:

* Header: Creates a heading block with a header and subheader on a background that is a darker version of the primary theme color.  You can optionally add a background image or make the block take up the entire screen.
* Plain Text: Creates a block with a section header and text, however, the text cannot be styled.
* Rich Text: Creates a block with a section header and text that can be styled with the text editor.  Files and images can also be uploaded and inserted as links.  Images and tables can also be inserted directly into the text.
* Alert Message: Creates a banner in one of four states: success, info, warning, or error to display an important message.
* Column Layout: This is a frame component that allows you to organize other components into columns so that they do not span the entire page.  You can create two or three column boxes with this component, however, it will not do anything by itself.
* Image Carousel: Creates a block with a section header and a carousel to display images.  You can upload as many images as you'd like, and your users will see them in a carousel that they can scroll through.
* Embedded Video: Creates a block with a section header and rich text description (see the rich text component) and embeds a video beneath the description.  The video's source can only be a direct upload.
* List: Creates a block with a section header and a numbered or bulleted list of items.  It seems pointless due to the rich text component, however, the list component allows you to easily drag items to rearrange them within the list or move them to other lists.
* List of Documents: Creates a block with a section header and a bulleted list of uploaded files.
* Signup Sheet Collection: Creates a signup sheet widget that your users can interact with.  You can create as many signup sheets as you'd like in a collection, and each one can have roles and shifts and can be easily hidden or disabled.  This component also allows you to manage who has signed up on each signup sheet.  When the email service is set up, additional features become available, such as emailing the details of the signup to selected users or emailing everyone who is on a signup sheet.
* Google Calendar: Embeds a Google Calendar widget on your site (uses [Fullcalendar](https://fullcalendar.io) instead of the actual Google Calendar widget for better styling).  On the Hotplate Console end, you can even directly add, edit, or delete events from the linked calendar.  **This component requires the calendar service to be set up.**
* Contact Form: Creates a block with a section header and a form to contact a designated recipient.  **This component requires the email service to be set up.**
* Item Request Form: Creates a block with a section header, a list of items, and a form to send a request for specific items to a designated recipient.  This is ideal for a library book request form or similar.  **This component requires the email service to be set up.**
*
*