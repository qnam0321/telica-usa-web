import { cp, copyFile, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const output = path.join(root, 'dist');
const publicFiles = [
    '_redirects',
    'index.html',
    'page2.html',
    'styles.css',
    'script.js',
    'favicon.png',
    'telica-logo.png',
    'telica-new-logo.png',
    'crebee-logo.png',
    'logo.jpg',
    'store1.jpg',
    'store2.jpg',
    'store3.jpg',
    'store4.jpg',
    'crebee-gateway-pro-angle.webp',
    'crebee-gateway-pro-back.webp',
    'crebee-gateway-pro-front.webp',
    'crebee-gateway-pro-side.webp',
    'crebee-gateway-pro-top.webp',
    'double-sided-adhesive-1.png',
    'double-sided-adhesive-2.png',
    'l-shape-90-degree-1.png',
    'l-shape-90-degree-2.png',
    'l-shape-45-degree-1-v2.png',
    'l-shape-45-degree-2-v2.png',
    'clip-1.png',
    'clip-2.png'
];

if (path.dirname(output) !== root || path.basename(output) !== 'dist') {
    throw new Error(`Unexpected build output path: ${output}`);
}

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const file of publicFiles) {
    await copyFile(path.join(root, file), path.join(output, file));
}

await cp(
    path.join(root, 'assets', 'product-lineup'),
    path.join(output, 'assets', 'product-lineup'),
    { recursive: true }
);

console.log(`Built ${publicFiles.length} public files and product-lineup assets into dist.`);
