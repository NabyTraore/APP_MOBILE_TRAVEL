
/**
 * Get Content window
 *
 * @param iframeId
 */
export function iframe(iframeId: string) {

    if (isIe()) {
        return document.getElementById(iframeId);
    }

    return window[iframeId];
}

/**
 * Overide polyfill new event constructor becaus not working on IE 11
 *
 * @param event
 * @param params
 */
export function newEvent(event) {
    if (isIe()) {
        const params: any = { bubbles: false, cancelable: false, detail: undefined };
        const evt: any = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }
    return new Event(event);
}

/**
 * Check if the browser is any kind of Internet explorer
 *
 * @return boolean
 */
export function isIe() {
    return navigator.appName === 'Microsoft Internet Explorer'
        || !!(navigator.userAgent.match(/Trident/)
            || navigator.userAgent.match(/rv:11/));

}
