import fs from "fs";
import path from "path";

const rootDir = "./icons";
const folders = ["bold", "duotone", "fill", "light", "regular", "thin"];

for (const folder of folders) {
  const dirPath = path.join(rootDir, folder);

  if (!fs.existsSync(dirPath)) {
    console.warn(`⚠️ Folder not found: ${dirPath}`);
    continue;
  }

  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    if (!file.endsWith(".svg")) continue;

    // Remove suffix before extension
    const suffix = `-${folder}`;
    if (file.includes(suffix)) {
      const newName = file.replace(suffix, "");
      const oldPath = path.join(dirPath, file);
      const newPath = path.join(dirPath, newName);
      fs.renameSync(oldPath, newPath);
      console.log(`✅ Renamed: ${file} → ${newName}`);
    }
  }
}

console.log("🎉 Done renaming SVGs!");
