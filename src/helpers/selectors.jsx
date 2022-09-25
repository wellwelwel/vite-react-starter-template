/**
 * @param {string} element
 * @param {*} baseElement - HTML | Node Element
 * @return {HTMLElement} s - HTMLElement
 * @return {HTMLElement} sEl - HTMLElement
 * @return {NodeListOf} sAll - NodeListOf
 * @return {NodeListOf} sElAll - NodeListOf
 **/

export const s = (element) => document.querySelector(element);
export const sAll = (element) => document.querySelectorAll(element);

if (!Node.prototype.hasOwnProperty('s')) Node.prototype.s = s;
if (!Node.prototype.hasOwnProperty('sAll')) Node.prototype.sAll = sAll;
