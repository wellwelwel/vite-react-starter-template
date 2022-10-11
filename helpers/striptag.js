const striptag = (htmlString) => String(htmlString).replace(/(<([^>]+)>)/gim, '');

export default striptag;
