import fs from "fs";
import path from "path";

import { HandleFiles } from "@shared/utils/HandleFiles";

import { HandleProducts } from "./utils/HandleProducts";
import { HandleProductsCategories } from "./utils/HandleProductsCategories";
import { HandleProductsPricesQuantities } from "./utils/HandleProductsPricesQuantities";
import { HandleProductsSimilares } from "./utils/HandleProductsSimilares";
import { HandleProductsSimilaresGroups } from "./utils/HandleProductsSimilaresGroups";
import { HandleProductsSpecifications } from "./utils/HandleProductsSpecifications";
import { HandleProductsSuggestions } from "./utils/HandleProductsSuggestions";
import { container, inject, injectable } from "tsyringe";
import { SaveJsonFile } from "../../utils/SaveJsonFile";

interface IFile {
  filename: string;
  rows: [];
}

@injectable()
class ImportCSVUseCase {

  constructor(
    @inject("HandleFiles")
    private handleFiles: HandleFiles,
    @inject("SaveJsonFile")
    private saveJsonFile: SaveJsonFile
  ) { }

  async execute(): Promise<void> {
    const tempCSVPath = path.join(__dirname, "../../temp/csv");

    const filesInPath = await this.handleFiles.readPath(tempCSVPath);

    const csvFiles = await this.handleFiles.filterFiles(filesInPath, ".csv");

    const csvFilesRead = await this.handleFiles.readFiles(csvFiles);

    const handleProducts = container.resolve(HandleProducts);
    const handleProductsCategories = container.resolve(HandleProductsCategories);
    const handleProductsPricesQuantities = container.resolve(HandleProductsPricesQuantities);
    const handleProductsSimilares = container.resolve(HandleProductsSimilares);
    const handleProductsSimilaresGroups = container.resolve(HandleProductsSimilaresGroups);
    const handleProductsSpecifications = container.resolve(HandleProductsSpecifications);
    const handleProductsSuggestions = container.resolve(HandleProductsSuggestions)

    const handleDefault = async file =>
      console.log(`${file.filename} não foi mapeado e será ignorado`);

    const filesUseCases = {
      Products: handleProducts.save,
      ProductsCategories: handleProductsCategories.save,
      ProductsPricesQuantities: handleProductsPricesQuantities.save,
      ProductsSimilares: handleProductsSimilares.save,
      ProductsSimilaresGroups: handleProductsSimilaresGroups.save,
      ProductsSpecifications: handleProductsSpecifications.save,
      ProductsSuggestions: handleProductsSuggestions.save,
      default: handleDefault
    };

    const saveCSVFilesPromise = csvFilesRead.map(async (file: IFile) => {
      
      const file_name = `${path
        .basename(file.filename)
        .replace(/\.[^/.]+$/, "")}`;

      // Poderia ser também: const file_name = file.filename.replace("csv", "")

      this.saveJsonFile.execute(file_name, file.rows);

      (filesUseCases[file_name] || filesUseCases.default)(file); // Aqui vai mapear e salvar os arquivos no banco de dados
    });

    await Promise.all(saveCSVFilesPromise);
  }
}

export { ImportCSVUseCase };
