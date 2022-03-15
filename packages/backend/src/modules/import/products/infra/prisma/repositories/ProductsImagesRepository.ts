import { ICreateProductImageDTO } from "@modules/import/products/dtos/ICreateProductImageDTO";
import { IProductsImagesRepository } from "@modules/import/products/repositories/IProductsImagesRepository";
import { prisma } from "@shared/infra/prisma/prismaClient";

import { ProductImage } from "../entities/ProductImage";

class ProductsImagesRepository implements IProductsImagesRepository {
  private repository = prisma.productsImages;

  constructor() {
    this.repository = prisma.productsImages;
  }

  public async create(data: ICreateProductImageDTO): Promise<void> {
    await this.repository.create({
      data: {
        id: data.id,
        id_product: data.id_product,
        file_name: data.file_name,
        file_path: data.file_path,
        sequence: data.sequence
      }
    });
  }

  public async findByProductId(id_product: number): Promise<ProductImage[]> {
    const result = await this.repository.findMany({
      where: {
        id_product
      }
    });

    return result;
  }

  public async deleteAll(): Promise<void> {
    await this.repository.deleteMany();
  }
}

export { ProductsImagesRepository };
