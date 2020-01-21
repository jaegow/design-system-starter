
// Element.matches() polyfill
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.matchesSelector
    || Element.prototype.mozMatchesSelector
    || Element.prototype.msMatchesSelector
    || Element.prototype.oMatchesSelector
    || Element.prototype.webkitMatchesSelector
    || function (s) {
      const matches = (this.document || this.ownerDocument).querySelectorAll(s);
      let i = matches.length;
      // eslint-disable-next-line no-plusplus
      while (--i >= 0 && matches.item(i) !== this) {}
      return i > -1;
    };
}

export const safeSelecor = (string) =>
  // selectors can not have "&" in them
  // selectors should not have whitespace in them
  // eslint-disable-next-line implicit-arrow-linebreak
  string.replace(/&|\s/g, '');
export function getClosestParent(elem, selector) {
  // Get the closest matching element
  // eslint-disable-next-line no-param-reassign
  for (; elem && elem !== document; elem = elem.parentNode) {
    if (elem.matches(selector)) return elem;
  }
  return null;
}
