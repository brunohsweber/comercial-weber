import parse from "csv-parse";
import fs from "fs";
import path from "path";

class HandleFiles {
  async readPath(directory) {
    return new Promise((resolve, reject) => {
      try {
        let files = fs.readdirSync(directory);

        files = files.map(file => {
          return path.join(directory, file);
        });

        resolve(files);
      } catch (error) {
        reject(error);
      }
    });
  }

  async filterFiles(array, endsWith) {
    return array.filter(obj => obj.endsWith(endsWith));
  }

  async readFiles(files) {
    return Promise.all(files.map((file: string) => this.readFile(file)));
  }

  async readFile(file) {
    if (file.endsWith(".csv")) {
      return new Promise((resolve, reject) => {
        const stream = fs.createReadStream(file);

        const fileObj = {
          filename: path.basename(file),
          rows: []
        };

        const parseFile = parse({
          delimiter: ";",
          bom: true,
          columns: true,
          encoding: "utf8",
          ignore_last_delimiters: true,
          relax_column_count: true
        });

        stream.pipe(parseFile);

        parseFile
          .on("data", async row => {
            const { ...rowObj } = JSON.parse(JSON.stringify(row).toLowerCase());

            delete rowObj[""]; // Remove a ultima propriedade do objeto que está vazia

            fileObj.rows.push(rowObj);
          })
          .on("end", async () => {
            // fs.promises.unlink(file);

            resolve(fileObj);
          })
          .on("error", err => {
            reject(err);
          });
      });
    }

    return file;
  }
}

export { HandleFiles };
