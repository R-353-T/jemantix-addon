import path from 'node:path';
import url from 'node:url';
import fs from 'node:fs';
import ManifestConfiguration from '../configuration/manifest.config.js';

const rootDirectory = path.dirname(path.dirname(url.fileURLToPath(import.meta.url)));
const templateDirectory = path.join(rootDirectory, 'configuration', 'template');
const distDirectory = path.join(rootDirectory, 'dist');

const manifestArray = [
    {
        name: 'chrome',
        entry: path.join(templateDirectory, 'chrome.manifest.json'),
        output: path.join(distDirectory, 'chrome', 'manifest.json')
    },
    {
        name: 'firefox',
        entry: path.join(templateDirectory, 'firefox.manifest.json'),
        output: path.join(distDirectory, 'firefox', 'manifest.json')
    }
];

for (const manifest of manifestArray) {
    console.log(`generate ${manifest.name} manifest..`);
    const jsonManifest = JSON.parse(fs.readFileSync(manifest.entry).toString());
    const jsonOutput = Object.assign(jsonManifest, ManifestConfiguration);
    fs.writeFileSync(manifest.output, JSON.stringify(jsonOutput, null, 2));
}
