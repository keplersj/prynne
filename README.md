# Prynne

[Kepler](https://keplersj.com)'s exploration into a more modern static site generation stack.

## Motivation

The following ideas are guiding me through this exploration in creating the Prynne static site generator:

### Functional

A good static site generator should be functional in nature, you feed it your site data and configuration it gives you a static copy of your website.

```js
(config, data) => site;
```

This ideology ensures that your static site generator stays out of your way when creating your site.

### Web3

Building websites for [The Decentralized Web](https://defipulse.com/blog/web3-explained/) will ensure your site is ready for the future of the web. You own your website when you build for web3. Your website will not fail because of a down CDN, deprecated library, or any other failure of the current web. Your website is yours. Host it, view it, and share it however you want to.

This ideology ensures that your site stays available and functional as the web moves forward.

### ES Modules, Web Components, and the Modern Web Platform

The web platform has matured greatly in the last 10 years. Modern web technologies are available at a scale never before seen on the internet. Your static site generator should enable you to quickly adopt these technologies for you and your vistors benefits.

This ideology ensures your website is making use of the technologies available.

### Sensibly Backwards Compatible

The web was built to provide everyone with the information they need, regardless of lot in life. For many reasons the most up to date technologies are not available to every person immediately. Your site should not prevent your content from being available to everyone, and your static site generator should not enable such technology segregation. A good, equitable static site generator will make sure your website is sensibly backwards compatible with older web technologies.

This ideology ensure that your site stays readable to _all_ of your vistors, no matter the technology they bring with them.

## Name

The big static site generator of the late 2000's was [Jekyll](https://jekyllrb.com/). Jekyll was effective for its simplicity in function, and effciency in handlings site templates and data. However, Jekyll was not ready for the advancements that came with the maturing JavaScript and CSS ecosystems of the 2010's.

Following behind Jekyll was [Gatsby](https://www.gatsbyjs.com/). Gatsby was built around static site generation by way of Web 2.0 web apps, and the data needed to build them.

Following in the tradition the static site generators that came before it, this project is named after [Hester Prynne](https://en.wikipedia.org/wiki/Hester_Prynne) of the 1850 novel [_The Scarlet Letter_](https://en.wikipedia.org/wiki/The_Scarlet_Letter) by [Nathaniel Hawthorne](https://en.wikipedia.org/wiki/Nathaniel_Hawthorne).

## License

Copyright (c) 2021 [Kepler Sticka-Jones](https://keplersj.com).
