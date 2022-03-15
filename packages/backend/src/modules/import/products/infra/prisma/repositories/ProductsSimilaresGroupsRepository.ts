import { ICreateProductSimilarGroupDTO } from "@modules/import/products/dtos/ICreateProductSimilarGroupDTO";
import { IProductsSimilaresGroupsRepository } from "@modules/import/products/repositories/IProductsSimilaresGroupsRepository";
import { prisma } from "@shared/infra/prisma/prismaClient";

class ProductsSimilaresGroupsRepository
  implements IProductsSimilaresGroupsRepository {
  private repository = prisma.productsSimilaresGroups;

  constructor() {
    this.repository = prisma.productsSimilaresGroups;
  }

  public async create(data: ICreateProductSimilarGroupDTO): Promise<void> {
    await this.repository.create({
      data: {
        id: data.id,
        similar_group_description: data.similar_group_description
      }
    });
  }

  public async deleteAll(): Promise<void> {
    await this.repository.deleteMany();
  }
}

export { ProductsSimilaresGroupsRepository };
