# Express Blog (front-end)
This is the front-end of my **REST API blog project** built using React and Tailwind CSS for me to try my hand at full-stack web development.

The other components of this project are a **back-end API server** at [Express Blog](https://github.com/chew01/express-blog) built using Express JS and Mongoose, as well as a **private editor page** at [Express Blog Editor](https://github.com/chew01/express-blog-editor) built using React and Tailwind CSS.

## Framework considerations
From the start, the design of this front-end blog encompassed the following **routes**:
- `/` - Homepage containing a feed of all published posts
- `/posts/:postLink` - Detailed post
- `/tags/:tagName` - Tag page containing a feed of all published posts with the tag
- `/users/:userName` - User page containing a feed of all published posts by the user
- `*` - When accessing an undefined route, redirect to Homepage.

Therefore, **Home, DetailedPost, Tag, User** views were required.

To accomodate this, a few React **components** were created:
- **Primary**: Header, Sidebar, Body (the basic structure of the webpage)
- **Sidebar**: Widgets (reusable component for displaying links)
- **Body**: Feed, Post, Comment, Composer (for displaying posts and comments, as well as compose comments)

## Website design considerations
The website was built from a **Mobile First** perspective using the Tailwind V3 CSS framework.

On small viewports (mobile), the sidebar will be hidden and the horizontal navbar would collapse to become a toggle-able dropdown menu. Whereas on bigger viewports (tablet and above), the sidebar will be displayed and the navbar will be horizontal.

This was my first time using the Tailwind CSS framework and having written most of my CSS so far without the use of libraries and frameworks, I found Tailwind utility classes to be very handy and much more flexible than Bootstrap for example.
