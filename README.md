# Factory Number One

An in-development pattern library, to help speed development of websites and applications. It includes theme-ability, allowing websites and applications built on it to be deployed by other agencies with their branding.

## Prerequisites

The following prerequisites must be installed on your system before you can begin:

* [Node.js](https://nodejs.org/)
* [Gulp](http://gulpjs.com/)

## Installation

Clone the repository, and CD into it:

    $ git clone https://github.com/City-of-Bloomington/factory-number-one.git
    $ cd factory-number-one

Next, install the NPM modules.

    $ npm install

The first time you run Factory Number One, you'll need to do an initial build of the HTML, CSS, documentation and assets folders.

    $ gulp init

Finally, run Gulp

    $ gulp

This starts Factory Number One on an HTTP server at `localhost:3000`. The development environment listens for changes to HTML and SCSS files, and rebuilds files on the fly.

##About the name

Factory Number One is named after the Showers Brothers Furniture Company Factory Number 1. In the 1920s, the facility was arguably the largest funiture factory in the world, leveraging convenient access to the railroads to ship its dressers to retailers in large quantities. After World War II, the industry saw a shift from shipping by train, to shipping by truck, but the company didn't adapt to these changes in the market. The company closed its doors in 1958. Most of the facility was lost to a fire in 1969, but one building survived: Factory Number 1. Today, the building houses Bloomington, Indiana's City Hall, Monroe County offices, and office space for private companies.
