How I do css-ing
================

This is how I deal with CSS for my [printing](https://www.printuridigital.ro/) website, directly on a the production website.
This way I see my CSS injected on the real website and I can test different designing scenarios CSS wise.
The modifications accepted will then be uploaded permanently by FTP a la '90' style.

## You need installed

- sassc compiler
- yui compressor
- inotify-tools

Also a Linux operating system 

## What it does

### sass:watch

It monitors any changes to files hosted in *src* directory and convert scss files to coresponding css files.

In order to inject your modifications, you `cd to bin/`  fire a `node server-style.js` that runs on port 3000 and copy to the browser console browset-style.js.
The production website must have Content-Security-Policy set to allows localhost:3000. Every time you switch to browser window and activate it, by clicking your CSS modification will appear laid out on your production website. They are not permanent, they are shown only in that browser window.

### css:up

Minify css files, move minified files to dist folder and clean up/remove minified css and css files.

By FTP, it upoads css files from *dist* directory to the web location, which it is specified in .env).

Into *bin* directory there are 4 file that need executable flag on.

*    *wait* use inotify to watch modifications on only certain scss files. It ignores scss files starting with underscore, css files and any other files that are not scss.
*    *.env* set your FTP credentials into terminal, so, the FTP actually knows where to put style.min.css.
*    *.unenv* unset credentials.
*    *.ftp* takes credentials from environment, placed there by *.env* and moves minified css files from *dist* to final destination 

Files fom bin are not intended to be run manually.
