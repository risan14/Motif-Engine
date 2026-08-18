# Designer Portfolio

A high-quality, responsive portfolio website built with plain HTML, CSS and JavaScript.

## Why it is dynamic

All portfolio content is separated from the design in:

`js/content.js`

You can change:
- Name and role
- Hero text and image
- About section
- Statistics
- Services
- Process
- Projects
- Project images
- Project descriptions
- Contact information
- Marquee text

The website automatically renders the content.

## Adding a project

Open `js/content.js` and add another object inside `projects`.

Example:

```js
{
  id: "new-project",
  title: "My New Project",
  category: "Branding",
  categories: ["All", "Branding", "Print"],
  year: "2026",
  client: "Client name",
  image: "images/my-project.jpg",
  description: "Project description.",
  details: ["Identity", "Art direction"],
  link: "#"
}
```

## Images

Put your images inside:

`images/`

Then reference them like:

`images/project-05.jpg`

You can also use an image URL.

## Publish on GitHub Pages

1. Create a GitHub repository.
2. Upload all files and folders.
3. Go to Settings → Pages.
4. Choose "Deploy from a branch".
5. Select the main branch and root folder.
6. Save.

Your website will receive a GitHub Pages address.

## Important

This is a static content-driven portfolio, not a database/CMS.

If you later want to log in to an admin panel and edit content from a browser without touching code, we can upgrade it to a real CMS-backed version.
