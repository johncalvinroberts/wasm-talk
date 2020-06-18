const plantuml = require("plantuml");
const fs = require("fs");
const { promisify } = require("util");
const path = require("path");
const readdir = promisify(fs.readdir);
const readfile = promisify(fs.readFile);
const writefile = promisify(fs.writeFile);

(async () => {
  try {
    const files = await readdir("./diagrams");
    for (const file of files) {
      console.log({ file });
      const txt = await readfile(`./diagrams/${file}`);
      const { name } = path.parse(file);
      const svg = await plantuml(txt);
      await writefile(svg, `./static/${name}.svg`);
    }
  } catch (error) {
    console.log({ error });
  }
})();
