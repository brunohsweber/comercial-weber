import fs from "fs";

export default function saveJsonFile(file_name, data) {
  fs.writeFileSync(
    `./src/modules/import/products/temp/json/${file_name}.json`,
    JSON.stringify(data)
  );
}