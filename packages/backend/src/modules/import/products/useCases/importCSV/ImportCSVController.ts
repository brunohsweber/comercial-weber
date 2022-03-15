import { container } from "tsyringe";
import { ImportCSVUseCase } from "./ImportCSVUseCase";

class ImportCSVController {
  async handle(): Promise<void> {
    const importCSVUseCase = container.resolve(ImportCSVUseCase)

    await importCSVUseCase.execute();

    console.log("Importação de CSV finalizada");
  }
}

export { ImportCSVController };
