import { ICreateProductSpecificationDTO } from "@modules/import/products/dtos/ICreateProductSpecificationDTO";
import { IProductsSpecificationsRepository } from "@modules/import/products/repositories/IProductsSpecificationsRepository";
import { prisma } from "@shared/infra/prisma/prismaClient";

import { ProductSpecification } from "../entities/ProductSpecification";

class ProductsSpecificationsRepository
  implements IProductsSpecificationsRepository {
  private repository = prisma.productsSpecifications;

  constructor() {
    this.repository = prisma.productsSpecifications;
  }

  public async create(data: ICreateProductSpecificationDTO): Promise<void> {
    await this.repository.create({
      data: {
        id: data.id,
        id_product: data.id_product,
        specification_description: data.specification_description,
        specification_value: data.specification_value
      }
    });
  }

  public async findByProductId(
    id_product: number
  ): Promise<ProductSpecification[]> {
    const result = await this.repository.findMany({
      where: {
        id: id_product
      }
    });

    return result;
  }

  public async deleteAll(): Promise<void> {
    await this.repository.deleteMany();
  }
}

export { ProductsSpecificationsRepository };
