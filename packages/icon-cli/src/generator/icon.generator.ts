import fs from "fs";
import path from "path";

import { IconWrapperTemplate } from "./icon-wrapper.template";
import { IconTemplate } from "./icon.template";
import { parseSvgString } from "./svg.parser";

const rootDir = "./icons";
const folders = ["bold", "duotone", "fill", "light", "regular", "thin"];
const wrappers = "./wrappers";
const output = "./output";
const iconNames = new Set<string>();
let iconWrappersIndex = "";

function pascalToKebab(str: string) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2") // insert - between lower/upper
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2") // handle consecutive capitals
    .toLowerCase();
}

for (const folder of folders) {
  fs.mkdirSync(path.join(rootDir, output, folder), { recursive: true });
}

fs.mkdirSync(path.join(rootDir, output, wrappers), { recursive: true });

for (const folder of folders) {
  const dirPath = path.join(rootDir, folder);
  let indexFile = "";

  if (!fs.existsSync(dirPath)) {
    console.warn(`⚠️ Folder not found: ${dirPath}`);
    continue;
  }

  const files = fs.readdirSync(dirPath);

  for (const fileRaw of files) {
    let file = fileRaw;

    if (!file.endsWith(".svg")) continue;

    const rawSvg = fs.readFileSync(path.join(dirPath, file));

    if (folder === "regular") {
      file = file.replace(".svg", "");
      file += "-regular.svg";
    }

    const name = file
      .replace(".svg", "")
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");

    const uniqueIconName = file
      .replace(".svg", "")
      .split("-")
      .filter(
        (segment, index, array) =>
          !(segment === folder && array.length - 1 === index)
      )
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");

    const iconComponent = parseSvgString(rawSvg.toString(), IconTemplate, {
      componentName: name,
    });

    if (iconComponent) {
      fs.writeFileSync(
        path.join(rootDir, output, folder, file.replace(".svg", ".icon.tsx")),
        iconComponent
      );
    }

    iconNames.add(uniqueIconName);
    indexFile += `export { ${name}Icon } from "./${file.replace(".svg", "")}.icon"\n`;
    console.log(`✅ Created ${name}Icon`);
  }

  fs.writeFileSync(path.join(rootDir, output, folder, "index.ts"), indexFile);
}

Array.from(iconNames).forEach((iconName) => {
  const fileName = pascalToKebab(iconName);

  iconWrappersIndex += `export { ${iconName}Icon } from "./${fileName}.icon"\n`;

  fs.writeFileSync(
    path.join(rootDir, output, wrappers, pascalToKebab(iconName) + ".icon.tsx"),
    IconWrapperTemplate(iconName)
  );
});

fs.writeFileSync(
  path.join(rootDir, output, wrappers, "index.ts"),
  iconWrappersIndex
);
