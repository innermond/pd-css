How I do css-ing
================

This is how I deal with CSS for my [printing](https://www.printuridigital.ro/) website.

## You need installed

- sassc compiler
- yui compressor
* inotify-tools

Also a Linux operating system 

## What it does

### sass:watch

It monitors any changes to files hosted in *src* directory and convert scss files to coresponding css files.
It ignores scss files starting with underscore, css files and 4913 file that vim creates.

### css:up

Minify css files, move minified files to dist folder and clean up/remove minified css and css files.

By FTP, it upoads css files from *dist* directory to the web location, which it is specified in .env).

Into *bin* directory there are 3 file that need executable flag on.

*    *.env* set your FTP credentials into terminal, so, the FTP actually knows where to put style.min.css.
*    *.unenv* unset credentials.
*    *.ftp* takes credentials from environment, placed there by *.env* and moves minified css files from *dist* to final destination 

Files fom bin are not intended to be run manually.
