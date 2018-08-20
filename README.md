# ABC Select Bookmarklet

## About

A bookmarklet to render the currently selected ABC into a modal, using @paulrosen's awesome [abcjs](https://github.com/paulrosen/abcjs) library.

All power to ABC! `/../,`

## Setup

Create a new bookmark in your browser, name it "ABC Select" (or something), and copy/paste the contents of [`dist/main.bookmarklet`](https://raw.githubusercontent.com/m3g4p0p/abc-select-bookmarklet/master/dist/main.bookmarklet) into the URL field. Then you can select some ABC on any page, click the bookmark, and get the dots:

![screenshot](img/screenshot.png?raw=true)

## Compatibility

This bookmarklet uses web components; in chrome and opera it will work out of the box, but in firefox you have to enter `about:config` in the search bar, and set the following flags to `true`:

- `dom.webcomponents.customelements.enabled`
- `dom.webcomponents.shadowdom.enabled`

## License

MIT @ m3g4p0p
