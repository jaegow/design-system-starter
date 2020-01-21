/* eslint-disable func-names */
import { buildLoggers } from './Log';
import { removeDuplicates } from '../utils/array';

// todo: pull in https://github.com/keeganstreet/specificity
// todo: use specificity to re-write css
const { log } = buildLoggers('StyleRipper');

if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.matchesSelector
    || Element.prototype.mozMatchesSelector
    || Element.prototype.msMatchesSelector
    || Element.prototype.oMatchesSelector
    || Element.prototype.webkitMatchesSelector
    || function (s) {
      const matches = (this.document || this.ownerDocument).querySelectorAll(s);
      let i = matches.length;
      // eslint-disable-next-line no-plusplus,no-empty
      while (--i >= 0 && matches.item(i) !== this) {}
      return i > -1;
    };
}

const getStyleSheetRules = () => {
  const sheets = [...document.styleSheets];
  const result = [];
  sheets.forEach((sheet) => {
    let rules;
    // todo: why is there a failure in some cases
    try {
      // todo: use this along with specificity to re-write css
      // sheet.cssRules is ordered based on where the styles appear in the style sheet
      // see: https://developer.mozilla.org/en-US/docs/Web/API/CSSRuleList
      rules = sheet.rules || sheet.cssRules;
    } catch (err) {
      // error('getStyleSheetRules()', err);
    }
    if (rules) {
      const rules_keys = Object.keys(rules);
      rules_keys.forEach((rule_key) => {
        const rule = rules[rule_key];
        result.push(rule);
      });
    }
  });
  return result;
};

const flattenElementTree = (elements) => {
  const elementsTree = elements.reduce((accumulator, element) => {
    accumulator.push(element);
    let children = [];
    if (element.children && element.children.length) {
      children = [...element.children];
      // eslint-disable-next-line no-param-reassign
      accumulator = [...accumulator, ...flattenElementTree(children)];
    }
    return accumulator;
  }, []);
  return elementsTree;
};

const matchElementsRules = (elements, rule) => {
  const matches = [];
  if (rule.selectorText) {
    elements.forEach((element) => {
      try {
        if (element.matches(rule.selectorText)) {
          matches.push(rule);
        }
      } catch (err) {
        // error('matchElementRules()', err);
      }
    });
  }
  return matches.length && matches;
};

const collectMatchingRules = (elements, styleRules) => {
  const result = [];
  log('collectMatchingRules()', 'styleRules.length', styleRules.length);
  log('collectMatchingRules()', 'elements.length', elements.length);
  // eslint-disable-next-line no-unused-vars
  styleRules.forEach((rule, index) => {
    const matches = matchElementsRules(elements, rule);
    if (matches) result.push(...matches);
  });
  return result;
};

const rulesToString = (rules) => {
  const rules_sorted = rules.sort((a, b) => {
    if (a.cssText < b.cssText) { return -1; }
    if (a.cssText > b.cssText) { return 1; }
    return 0;
  });
  const rules_strings = rules_sorted.map((rule) => rule.cssText);
  const rules_unique = removeDuplicates(rules_strings);
  return rules_unique.join('\n\n');
};

const fromElement = (...elements) => {
  if (!document.styleSheets) {
    throw new Error('StyleRipper.fromElement() document.styleSheets is not available in this browser.');
  }
  if (!elements || !elements.length) {
    throw new Error('StyleRipper.fromElement() expects at least one argument (DOM element)');
  }
  // log('fromElement()', 'elements', elements);
  const flattened_elements = flattenElementTree(elements);
  // log('fromElement()', 'flattened_elements', flattened_elements);
  const style_rules = getStyleSheetRules();
  // log('fromElement()', 'style_rules', style_rules);
  const matchingRules = collectMatchingRules(flattened_elements, style_rules);
  // log('fromElement()', 'matchingRules', matchingRules);
  const css = rulesToString(matchingRules);
  log('fromElement()', 'css', `\n\n${css}`);

  return {
    css,
  };
};

const StyleRipper = {
  fromElement,
};

// setTimeout(() => {
//   // 'input-id-15';
//   // const test_element = document.getElementById('input-id-15');
//   // log('Testing Style Ripper on ', test_element);
//   // const test_matches_class_success = '.pxwcs .rw-datetime-picker';
//   // const test_matches_class_fail = '.pxwcssss .rw-datetime-picker';
//   // log('test_element.matches(test_class)', test_element.matches(test_class));
//   // log('');
//   // fromElement(test_element);
// }, 500);

export default StyleRipper;
