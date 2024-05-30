// ==UserScript==
// @name         Factorio Mod Magnet
// @namespace    https://re146.dev/
// @version      1.3
// @description  Adds a red "Download from re146.dev" button on mod pages on the Factorio mod portal - Forked from RE146.dev
// @match        https://mods.factorio.com/mod/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=re146.dev/factorio/mods
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    // Check if we're on a mod page
    const modUrlMatch = location.href.match(/^https:\/\/mods\.factorio\.com\/mod\/([^\/]+)/);
    if (!modUrlMatch) {
        return;
    }
    const modName = modUrlMatch[1];

    // Create the button

    const downloadButton = NewButton(modName);

    // Adds hover effect

    downloadButton.onmouseover = function() {
        downloadButton.style.backgroundColor = '#c0392b';
    };
    downloadButton.onmouseout = function() {
        downloadButton.style.backgroundColor = '#e74c3c';
    };

    // Find the container to insert the button
    const container = document.querySelector('.mod-tags-download');
    if (container) {
        // Insert the button at the top of the container
        container.append(downloadButton);
    } else {
        console.warn('Could not find the container to insert the download button');
    }
})();
function NewButton(modName) {
    const downloadButton = document.createElement('a');
    downloadButton.innerText = 'Download from re146.dev';
    downloadButton.style.backgroundColor = '#e74c3c';
    downloadButton.style.color = '#ffffff';
    downloadButton.style.padding = '10px 20px';
    downloadButton.style.textDecoration = 'none';
    downloadButton.style.display = 'inline-block';
    downloadButton.style.borderRadius = '5px';
    downloadButton.style.fontSize = '16px';
    downloadButton.style.fontWeight = 'bold';
    downloadButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    downloadButton.style.transition = 'background-color 0.3s ease';
    downloadButton.setAttribute('href', `https://re146.dev/factorio/mods/en#https://mods.factorio.com/mod/${modName}`);
    downloadButton.setAttribute('target', '_blank');
    return downloadButton;
}
