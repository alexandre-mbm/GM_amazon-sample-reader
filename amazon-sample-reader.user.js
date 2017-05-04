// ==UserScript==
// @name        Amazon Samples Reader
// @namespace   https://github.com/alexandre-mbm
// @description Open Sample on Kindle Cloud Reader
// @include     http*://www.amazon.com.br/*-ebook/dp/*/*
// @version     1
// @grant       none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

function getASIN(href) {
  var asin;
  asin = href.match(/\/dp\/(\w{10})\/ref/i);
  if (!asin) { asin = href.match(/\/gp\/product\/(\w{10})/i); }
  if (!asin) { return null; }
  return asin[1].toUpperCase();
}

function go() {
    span = $('#title span.a-size-large').get()[0];
    asin = getASIN(location.href);
    link = `https://ler.amazon.com.br/?asin=${asin}`;
    style = "padding-left: 2em";
    text = "ver amostra";
    span.innerHTML = `<a href="${link}" style="${style}">${text}</a>`;
}

waitForKeyElements ('#one-click-button', go);

// http://userscripts-mirror.org/scripts/review/61073
// http://stackoverflow.com/a/11197969/3391915
