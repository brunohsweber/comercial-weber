import { ICreateProductSimilarDTO } from "@modules/import/products/dtos/ICreateProductSimilarDTO";
import { IProductsSimilaresRepository } from "@modules/import/products/repositories/IProductsSimilaresRepository";
import { prisma } from "@shared/infra/prisma/prismaClient";

class ProductsSimilaresRepository implements IProductsSimilaresRepository {
  private repository = prisma.productsSimilares;

  constructor() {
    this.repository = prisma.productsSimilares;
  }

  public async create(data: ICreateProductSimilarDTO): Promise<void> {
    await this.repository.create({
      data: {
        id: data.id,
        id_similar_group: data.id_similar_group,
        id_product: data.id_product
      }
    });
  }

  public async deleteAll(): Promise<void> {
    await this.repository.deleteMany();
  }
}

export { ProductsSimilaresRepository };
