import fs from "node:fs";
import path from "node:path";

const inputRoot = "./icons";
const folders = ["bold", "broken", "bulk", "linear", "outline", "twotone"];

let total = 0;

console.log("📦 Counting icons...\n");

for (const folder of folders) {
  const dirPath = path.join(inputRoot, folder);

  if (!fs.existsSync(dirPath)) {
    console.warn(`⚠️ Missing folder: ${folder}`);
    continue;
  }

  const files = fs.readdirSync(dirPath).filter((file) => file.endsWith(".svg"));

  console.log(`${folder.padEnd(10)} → ${files.length} icons`);
  total += files.length;
}

console.log("\n🧮 Total icons:", total);
