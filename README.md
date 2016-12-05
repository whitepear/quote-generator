This application is live at: https://morning-ocean-34757.herokuapp.com/

This responsively-designed application provides users with randomly generated quotes, sourced from the *[Forismatic API](http://forismatic.com/en/)*. A list of the three most recently generated quotes is updated in real-time. Additionally, users can press a button to tweet the current quote.

The application architecture consists of a single stateful container component, within which multiple stateless functional components reside. If a user attempts to tweet a quote containing more than 140 characters, the quote will be replaced with a truncated preview and a link to the quote in its entirety at the Forismatic website. Application styling is implemented via SASS.

**Note**: Due to limitations inherent to the Forismatic API, the live application (linked above) must route API requests through an Express proxy server.