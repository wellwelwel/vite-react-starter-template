/**
 * @param {string} element
 * @return {HTMLElement} s - HTMLElement
 * @return {NodeListOf} sAll - NodeListOf
 **/

export const s = (element) => document.querySelector(element);
export const sAll = (element) => document.querySelectorAll(element);

if (!Node.prototype.hasOwnProperty('s')) Node.prototype.s = s;
if (!Node.prototype.hasOwnProperty('sAll')) Node.prototype.sAll = sAll;
