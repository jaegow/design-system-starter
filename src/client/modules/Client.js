const _is = () => {
  let Opera;
  let Firefox;
  let Safari;
  let IE;
  let Edge;
  let Chrome;
  let Blink;

  // // const isNode = typeof process !== 'undefined' && process.release && process.release.name === 'node';

  // isomorphic use case
  if (window) {
    // Opera 8.0+
    Opera = (!!window.opr && !!window.opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // Firefox 1.0+
    Firefox = typeof InstallTrigger !== 'undefined';
    // Safari 3.0+ "[object HTMLElementConstructor]"
    // eslint-disable-next-line func-names
    Safari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === '[object SafariRemoteNotification]'; }(!window.safari || (typeof window.safari !== 'undefined' && window.safari.pushNotification)));
    // Internet Explorer 6-11
    IE = /* @cc_on!@ */false || !!document.documentMode;
    // Edge 20+
    Edge = !IE && !!window.StyleMedia;
    // Chrome 1 - 71
    Chrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
    // Blink engine detection
    Blink = (Chrome || Opera) && !!window.CSS;
  }

  return {
    Opera,
    Firefox,
    Safari,
    IE,
    Edge,
    Chrome,
    Blink,
  };
};

const is = _is();

// console.log('Client.is', is);

export default {
  is,
};
