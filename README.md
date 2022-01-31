How I do css-ing
================

This is how I deal with CSS for my [printing](https://www.printuridigital.ro/) website.

## You need installed

- sassc compiler
- yui compressor

Also a Linux operating system 

## What id does

### sass:watch

It monitors any changes to files hosted in *src* directory and convert file style.scss to style.css.

### css:up

Minify style.css file (this file is the main css file, it collects all css needed for website).

By FTP, it moves style.min.css from *dist* directory to the web location, which it is specified in .env).

Into *bin* directory there are 3 file that need executable flag on.

*    *.env* set your FTP credentials into terminal, so, the FTP actually knows where to put style.min.css.
*    *.unenv* unset credentials.
*    *.ftp* takes credentials from environment, placed there by *.env* and moves
     file stye.min.css from *dist* to final destination 
