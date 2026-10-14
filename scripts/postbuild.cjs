const fs = require('node:fs');
const path = require('node:path');
const dir = path.resolve(__dirname, '../dist/perfil/browser');
fs.copyFileSync(path.join(dir, 'index.html'), path.join(dir, '404.html'));
fs.writeFileSync(path.join(dir, '.nojekyll'), '');
console.log('Preparado 404.html para rutas de GitHub Pages.');
