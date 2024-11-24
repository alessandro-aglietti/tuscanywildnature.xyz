/* eslint-disable func-names */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */

// This script is injected into the Notion page and runs on every page load.
window.onload = function () {
  setInterval(() => {
    // Remove all Notion tooltips on images
    document
      .querySelectorAll('div[style*="position: absolute; top: 4px;"]')
      ?.forEach((el) => (el.style.display = 'none'))

    // Remove hidden properties dropdown
    const propertiesDropdown = document.querySelector('div[aria-label="Page properties"]')?.nextElementSibling

    if (propertiesDropdown) {
      propertiesDropdown.style.display = 'none'
    }
  }, 1000)
}

var removeHeaderInterval = null;
removeHeaderInterval = setInterval(function () {
  var header = document.body.getElementsByTagName('header');
  if (header.length) {
    header = header[0];
    if (header.nextSibling !== null) {
      // desktop
      header.remove();
    } else {
      // mobile
      header.parentNode.remove();
    }
    clearInterval(removeHeaderInterval);
  }
}, 500);

function kofiScriptOnload() {
  kofiWidgetOverlay.draw('tuscanywildnature', {
    'type': 'floating-chat',
    'floating-chat.donateButton.text': 'Support me',
    'floating-chat.donateButton.background-color': '#ff38b8',
    'floating-chat.donateButton.text-color': '#fff'
  });
}
var kofiScript = document.createElement( 'script' );
kofiScript.setAttribute( 'src', 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js' );
kofiScript.setAttribute( 'onload', 'kofiScriptOnload()');
document.body.appendChild(kofiScript);
