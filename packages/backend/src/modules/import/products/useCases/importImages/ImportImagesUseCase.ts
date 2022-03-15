import path from "path";

import { HandleFiles } from "@shared/utils/HandleFiles";
import fs from "fs";
import { inject, injectable } from "tsyringe";
import { SaveJsonFile } from "../../utils/SaveJsonFile";

@injectable()
class ImportImagesUseCase {

  constructor(
    @inject("HandleFiles")
    private handleFiles: HandleFiles,
    @inject("SaveJsonFile")
    private saveJsonFile: SaveJsonFile
  ) { }

  async execute(): Promise<void> {
    const tempImagePath = path.join(__dirname, "../../temp/img");

    const filesPath = await this.handleFiles.readPath(tempImagePath);

    const filesFiltered = await this.handleFiles.filterFiles(filesPath, ".jpg");

    if (!filesFiltered.length) {
      throw new Error("Nenhuma imagem na pasta");
    }

    const productsImages = [];

    const saveImagesPromise = filesFiltered.map(async (file: string) => {
      const file_name = path.basename(file);

      const image = {
        id_product: +path.basename(file).split("_")[0],
        file_name: path.basename(file),
        file_path: path.join(__dirname, `../../temp/img/${file_name}`),
        sequence: +file.split("_")[1].replace(/\.[^/.]+$/, "")
      };

      productsImages.push(image);

      // colocar no banco de dados
    });

    Promise.all(saveImagesPromise);

    this.saveJsonFile.execute("ProductsImages", productsImages);
  }
}

export { ImportImagesUseCase };
