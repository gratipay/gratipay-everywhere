Gittip-Everywhere
=================

The official Gittip browser extension. We enable Gittip giving icons on
many of your favorite sites.

Supported browsers:

* Chrome
* Firefox

This project was inspired by
https://github.com/ironchefpython/gittip-browser-extension

## Requirements

* Trigger's [OpenForge tool][openforge-about] ([Installation Instructions][openforge-install])
* Bower: `[sudo] npm install --global bower`

## Build

Activate the tool's virtualenv, then:

    git clone https://github.com/gittip/Gittip-Everywhere.git
    cd Gittip-Everywhere
    bower install
    source <openforge-path>/python-env/bin/activate
    forge-extension build <browser>

*Note:* Gittip-Everywhere currently only supports building the `chrome`
extension, but OpenForge additionally supports `firefox`, `safari` &
`ie`.

## Similar Projects

- [Gittip Button for Github][gittip-button]

<!-- Links -->
   [openforge-install]: https://github.com/trigger-corp/browser-extensions#readme
   [openforge-about]:   http://trigger.io/cross-platform-application-development-blog/2013/09/10/introducing-openforge-an-open-source-cross-platform-browser-add-on-framework/
   [gittip-button]:     https://github.com/nathancahill/gittip-button
