#  The Library

A website for sharing our reading: two personal libraries, a detailed page for every book, a colorblind mode and a button that takes you to a random book.

## Features

- **Two personal libraries**, each reachable from the home page.
- **Book pages**: author, category, publisher, publication date, page count, comment, rating and synopsis.
- **A different mood for each book**: every page has its own background, chosen to match the book's universe.
- **Random book**: the icon of the box with question marks opens a randomly chosen book page.
- **Colorblind mode**: the eye icon switches to an alternative stylesheet (`colorblind.css`).
- **"Forms & Authors" page**: a form for each library, an authors page, a self-evaluation and a list of sources.
- **Live date and time** displayed at the bottom of the home page.
- **Contact**: a "Send an email" button opens the default mail client.

## Project structure

```
Book-Library/
├── index.xhtml        # Home page
├── Code/              # JavaScript (clock, random book, colorblind mode)
├── Content/           # Site pages
│   ├── info.xhtml     # Forms & Authors
│   ├── <name>.xhtml   # One page per personal library
│   └── <name>/        # Book pages for each library
├── Images/            # Icons, profile pictures, covers, backgrounds
└── Styles/            # Stylesheets (including the colorblind version)
```

## Built with

- XHTML
- CSS
- TypeScript
- JavaScript
- Google Fonts: MedievalSharp, UnifrakturMaguntia and Crimson Text