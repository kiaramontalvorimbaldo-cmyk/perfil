const fs = require('node:fs');
const path = require('node:path');
const project = path.resolve(__dirname, '..');
const output = path.resolve(project, 'dist');
if (path.dirname(output) !== project || path.basename(output) !== 'dist') {
  throw new Error('La salida debe permanecer dentro de este proyecto.');
}
fs.mkdirSync(output, { recursive: true });
function clearFiles(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) clearFiles(target);
    else fs.unlinkSync(target);
  }
}
clearFiles(output);
fs.mkdirSync(path.join(output, 'perfil'), { recursive: true });
function prepareDirectories(source, target) {
  fs.mkdirSync(target, { recursive: true });
  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    if (entry.isDirectory()) prepareDirectories(path.join(source, entry.name), path.join(target, entry.name));
  }
}
prepareDirectories(path.join(project, 'public'), path.join(output, 'perfil/browser'));
