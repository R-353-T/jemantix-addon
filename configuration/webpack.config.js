import path from 'node:path';
import url from 'node:url';

const rootDirectory = path.dirname(path.dirname(url.fileURLToPath(import.meta.url)));
const distDirectory = path.join(rootDirectory, 'dist');
const entry = path.join(rootDirectory, 'source', 'index.js');

const webpackDefault = {
    mode: 'production',
    resolve: { extensions: ['.js'] }
};

/**
 * @type {import('webpack').Configuration}
 */
const webpackFirefox = {
    entry,
    output: {
        path: path.join(distDirectory, 'firefox'),
        filename: 'index.min.js'
    }
};

/**
 * @type {import('webpack').Configuration}
 */
const webpackChrome = {
    entry,
    output: {
        path: path.join(distDirectory, 'chrome'),
        filename: 'index.min.js'
    }
};

const configurations = [webpackFirefox, webpackChrome].map(
    (config) => {
        return Object.assign(config, webpackDefault);
    }
);

export default configurations;
