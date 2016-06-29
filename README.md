# Factory Number One

An in-development pattern library, to help speed development of websites and applications. It includes theme-ability, allowing websites and applications built on it to be deployed by other agencies with their branding.

## Prerequisites

The following prerequisites must be installed on your system before you can begin:

* [Node.js](https://nodejs.org/)
* [Gulp CLI](https://www.npmjs.com/package/gulp-cli)

## Installation

Clone the repository, and CD into it:

    $ git clone https://github.com/City-of-Bloomington/factory-number-one.git
    $ cd factory-number-one

Next, install the NPM modules.

    $ npm install

The first time you run Factory Number One, you'll need to do an initial build of the HTML, CSS, documentation and assets folders.

    $ gulp init

Finally, run Gulp.

    $ gulp

This starts Factory Number One on an HTTP server at `localhost:3000`. The development environment listens for changes to HTML and SCSS files, and rebuilds files on the fly.

## Themes

Factory Number One provides style guides for multiple themes, from within one unified codebase. Websites and applications that follow the HTML conventions in the style guides should use the corresponding stylesheets.

As of 0.3, there are three themes:

* *Default:* A lightweight foundation from which other themes inherit their base. Page layout is delegated to other themes.
* *Info:* For information and content-centric websites. This theme was created after the City's website redesign started, and a desire arose to create other public-facing web applications that share the same look and feel as the Drupal site. Because this theme is specialized, many design patterns are implemented exclusively for this theme first, and implemented for other themes as the need arises.
* *Kirkwood:* Theme for internal web applications, named for its use of a photo of Kirkwood Ave in the page background. It focuses on patterns relevant to business application UI.

## File organization

The build system compiles HTML and CSS from sources spread across the entire project. By breaking the HTML and SASS files into small pieces, we can place HTML snippets in the same folder as their corresponding SASS modules.

* *components* This folder contains HTML snippets (and, in some cases, Swig-based helpers) for reusable design patterns. All patterns are included in the Default theme, but the Default theme only provides the minimum amount styling to each pattern that is common across the other themes. Some components are only supported by the Info theme.
* *layouts* This folder contains an HTML file to use as a base Swig template for all HTML files compiles by the build system.
* *static* This folder contains static files available to all themes, including Javascript for common patterns, webfont files, and image files.
* *themes* HTML and CSS for each theme.

## SASS conventions

### Framework scoping

All Factory Number One classes are nested inside a `.fn1` selector, in order to limit the scope of HTML elements selected by the framework's stylesheets. For most internal projects, like the City website, or a local application, it's normal apply the `fn1` class to the `<body>` element, putting the entire HTML document into scope. For projects with a considerable amount of third party code, we would apply the `fn1` class to a `<div>` that contains the component we want to insert into the document. This limits the scope of elements selected by the framework stylesheet, so the framework stylesheet won't interfere with third-party HTML.

Prior to the 0.3 release, all CSS class names were prefixed with `.fn1-`, to namespace the class names. This conflicted with a need for class names to be framework-neutral, to maximize the theme-ability of the HTML. Moving the `fn1` class to a container, as a means of scoping the framework stylesheet's selectors, was chosen as a compromise.

### Units of measurement

To ensure legibility, almost all layout widths should be declared either in `em` or `rem` units. This helps text remain readable even if users change the level of zoom, or change the base font-size at the OS level. By using arithmetic features in SASS, we can calculate traditional pixel values, and denote to our colleagues what the intended outcome is. When declaring a width or font-size as a fraction of an `em` or `rem`, the denominator (bottom number) denotes the inherited font-size, and the numerator (top number) denotes the intended output.

In the following example, the element inherits the base font-size of 16px (because the unit of measurement is `rem`), and updates it to 24px:

    font-size: (24rem/16);

Now that the font-size is 24px, we could specify line-height relative to the font-size. The following specifies a line-height of 28px, and denotes an inherited a font-size of 24px:

    line-height: (28em/24);

## About the name

Factory Number One is named after the Showers Brothers Furniture Company Factory Number 1. In the 1920s, the facility was arguably the largest furniture factory in the world, leveraging convenient access to the railroads to ship its dressers to retailers in large quantities. After World War II, the industry saw a shift from shipping by train, to shipping by truck, but the company didn't adapt to these changes in the market. The company closed its doors in 1958. Most of the facility was lost to a fire in 1969. One of the few buildings to survive was Factory Number 1. As of 2016, the building houses Bloomington, Indiana's City Hall, Monroe County offices, and office space for private companies.
