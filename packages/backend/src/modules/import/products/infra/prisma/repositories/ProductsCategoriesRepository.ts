import { ICreateProductCategoryDTO } from "@modules/import/products/dtos/ICreateProductCategoryDTO";
import { IProductsCategoriesRepository } from "@modules/import/products/repositories/IProductsCategoriesRepository";
import { prisma } from "@shared/infra/prisma/prismaClient";

import { ProductCategory } from "../entities/ProductCategory";

class ProductsCategoriesRepository implements IProductsCategoriesRepository {
  private repository = prisma.productsCategories;

  constructor() {
    this.repository = prisma.productsCategories;
  }

  public async create(data: ICreateProductCategoryDTO): Promise<void> {
    await this.repository.create({
      data: {
        id: data.id,
        level: data.level,
        category: data.category,
        category_description: data.category_description
      }
    });
  }
  public async list(): Promise<ProductCategory[]> {
    const result = await this.repository.findMany();

    return result;
  }
  public async deleteAll(): Promise<void> {
    await this.repository.deleteMany();
  }
}

export { ProductsCategoriesRepository };
