const fs = require("fs");
const { promisify } = require("util");
const { exec } = require("child_process");
const path = require("path");
const readdir = promisify(fs.readdir);

const renderSvg = (input, output) =>
  new Promise((resolve, reject) => {
    try {
      exec(`seq-cli -i ${input} -o ${output}`, (error, stdout, stderr) => {
        if (error) reject(error);
        resolve(stdout);
      });
    } catch (error) {
      reject(error);
    }
  });

(async () => {
  try {
    const files = await readdir("./diagrams");
    for (const file of files) {
      const { name } = path.parse(file);
      const input = path.resolve(__dirname, `diagrams/${file}`);
      const output = path.resolve(__dirname, `assets/${name}.svg`);
      await renderSvg(input, output);
    }
  } catch (error) {
    console.log({ error });
  }
})();
