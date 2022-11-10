// usingPromiseAll.js

const fs = require('fs').promises;

const files = [
  'file1.txt',
  'file2.txt',
  'file3.txt',
]


async function arrayToFile() {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  
  const createFilesPromises = strings
  .map((string, index) => fs.writeFile(`./file${index + 1}.txt`, string));

  await Promise.all(createFilesPromises);

  const fileNames = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ];

  const readFilesPromises = fileNames
  .map((fileName) => fs.readFile(fileName, 'utf-8'));

  const fileContents = await Promise.all(readFilesPromises);

  const newFileContent = fileContents.join(' ');

  await fs.writeFile('./fileAll.txt', newFileContent);

}

arrayToFile() // caso queira esperar a resolução, use o `await` ou `.then`


async function main() {
  try {
    const promises = files.map(async (file, index) => {
      const contentFile = await fs.readFile(file, 'utf8');
      console.log(`File ${index + 1}: ${contentFile}`)
    }) 
    await Promise.all(promises);
    console.log(`That's all folks!`);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

main()

async function getFilesSizeSum() {
    try {
      let filesSizeSum = 0
      await Promise.all(files.map(async (file) => {
        contentFile = await fs.readFile(file);
        filesSizeSum = filesSizeSum + contentFile.byteLength;
      }));
      result = `Lidos 3 arquivos totalizando ${filesSizeSum} bytes`;
      return console.log(result);
    } catch (err) {
      console.error(`Erro ao ler o arquivo: ${err.message}`);
    }
  }
  
  getFilesSizeSum()


// Promise.all([
//   fs.readFile('file1.txt'),
//   fs.readFile('file2.txt'),
//   fs.readFile('file3.txt'),
// ])
//   .then(([file1, file2, file3]) => {
//     const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
//     console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
//   })
//   .catch((err) => {
//     console.error(`Erro ao ler arquivos: ${err.message}`);
//   });