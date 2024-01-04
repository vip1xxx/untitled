const fs = require('fs');
const path = require('path');

const mainFolder = 'mainFolder';
fs.mkdirSync(mainFolder);

for (let i = 1; i <= 5; i++) {
  const folderName = path.join(mainFolder, `folder${i}`);
  fs.mkdirSync(folderName);
}

for (let i = 1; i <= 5; i++) {
  const fileName = path.join(mainFolder, `file${i}.txt`);
  fs.writeFileSync(fileName, 'Hello, this is a sample file content.');
}


fs.readdirSync(mainFolder).forEach(element => {
  const elementPath = path.join(mainFolder, element);
  const stats = fs.statSync(elementPath);

  if (stats.isFile()) {
    console.log(`FILE: ${element}`);
  } else if (stats.isDirectory()) {
    console.log(`FOLDER: ${element}`);
  }
});
