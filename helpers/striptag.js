const striptag = (htmlString) => String(htmlString).replace(/(<([^>]+)>)/gm, '');

export default striptag;
