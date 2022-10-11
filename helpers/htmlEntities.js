import { encode } from 'html-entities';

const htmlEntities = (string) => encode(string, { mode: 'nonAsciiPrintable' });

export default htmlEntities;
