import { ImportImagesUseCase } from "./ImportImagesUseCase";

import { container } from "tsyringe";

class ImportImagesController {
  async handle(): Promise<void> {
    const importImagesUseCase = container.resolve(ImportImagesUseCase)

    await importImagesUseCase.execute();

    console.log("Importação de imagens finalizada");
  }
}

export { ImportImagesController };
