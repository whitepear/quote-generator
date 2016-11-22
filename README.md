This application is live at: https://whitepear.github.io/projects/react/quote/app/index.html

This responsively-designed application provides users with randomly generated quotes, sourced from the *[Forismatic API](http://forismatic.com/en/)*. A list of the three most recently generated quotes is updated in real-time. Additionally, users can press a button to tweet the current quote.

The application architecture consists of a single stateful container component, within which multiple stateless functional components reside. If a user attempts to tweet a quote containing more than 140 characters, the quote will be replaced with a truncated preview and a link to the quote in its entirety at the Forismatic website. Application styling is implemented via SASS.

**Note**: Due to limitations inherent to the Forismatic API, the live application (linked above) must route API requests through a proxy. There may be a delay when fetching new quotes as a result.